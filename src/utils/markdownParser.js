import MarkdownIt from 'markdown-it'
import markdownItAbbr from 'markdown-it-abbr'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItAttrs from 'markdown-it-attrs'
import markdownItCheckbox from 'markdown-it-checkbox'
import markdownItFootnote from 'markdown-it-footnote'
import markdownItHighlightLines from 'markdown-it-highlight-lines'
import markdownItHighlightjs from 'markdown-it-highlightjs'
import markdownItIns from 'markdown-it-ins'
import markdownItMultimdTable from 'markdown-it-multimd-table'
import markdownItShortcodeTag from 'markdown-it-shortcode-tag'
import markdownItSub from 'markdown-it-sub'
import markdownItSup from 'markdown-it-sup'
import markdownItTaskLists from 'markdown-it-task-lists'

const markdownParser = new MarkdownIt()
  .use(markdownItAbbr)
  .use(markdownItAnchor)
  .use(markdownItAttrs)
  .use(markdownItCheckbox)
  .use(markdownItFootnote)
  .use(markdownItHighlightLines)
  .use(markdownItHighlightjs)
  .use(markdownItIns)
  .use(markdownItMultimdTable, { multiline: false, rowspan: true, headerless: false })
  .use(markdownItShortcodeTag, {
    widget: {
      render: function (attrs) {
        return `<div class="widget">${attrs.name}</div>`
      },
    },
  })

// Header Section Management
function headerSections(md, options) {
  const opts = Object.assign({}, options)

  function addSections(state) {
    let tokens = []
    let Token = state.Token
    let sections = []
    let nestedLevel = 0

    function openTag(token, parser, classOptName) {
      let t = new Token(parser, opts.tagName, 1)
      t.block = true
      const cls = token && opts[token.tag] && opts[token.tag][classOptName]
      t.attrs = appendClass(token.attrs, cls)
      return t
    }

    function closeTag(parser) {
      let t = new Token(parser, opts.tagName, -1)
      t.block = true
      return t
    }

    function closeSections(section) {
      while (last(sections) && section.header <= last(sections).header) {
        sections.pop()
        tokens.push(closeTag('section_inner_close'))
        tokens.push(closeTag('section_wrapper_close'))
      }
    }

    function closeSectionsToCurrentNesting(nesting) {
      while (last(sections) && nesting < last(sections).nesting) {
        sections.pop()
        tokens.push(closeTag('section_inner_close'))
        tokens.push(closeTag('section_wrapper_close'))
      }
    }

    function closeAllSections() {
      while (sections.pop()) {
        tokens.push(closeTag('section_inner_close'))
        tokens.push(closeTag('section_wrapper_close'))
      }
    }

    for (let i = 0, l = state.tokens.length; i < l; i++) {
      let token = state.tokens[i]

      // Record level of nesting
      if (token.type.search('heading') !== 0) {
        nestedLevel += token.nesting
      }
      if (last(sections) && nestedLevel < last(sections).nesting) {
        closeSectionsToCurrentNesting(nestedLevel)
      }

      // Add sections before headers
      let expect = opts.hasOwnProperty(token.tag)
      if (token.type === 'heading_open') {
        let section = {
          header: headingLevel(token.tag),
          nesting: nestedLevel,
        }
        if (last(sections) && section.header <= last(sections).header && expect) {
          closeSections(section)
        }
        if (expect) {
          tokens.push(openTag(token, 'section_wrapper_open', 'wrapperClass'))
          sections.push(section)

          // Clear the attribute of the header tag
          token.attrs = []
        }

        tokens.push(token)
      } else if (token.type === 'heading_close') {
        // Add inner section after headers
        tokens.push(token)
        if (expect) {
          tokens.push(openTag(token, 'section_inner_open', 'innerClass'))
        }
      } else {
        tokens.push(token)
      }
    }
    closeAllSections()

    state.tokens = tokens
  }

  function appendClass(attrs, cls) {
    if (cls == null) {
      return attrs
    }
    if (attrs == null) {
      attrs = []
    }
    let appended = false
    attrs.forEach(function (x, i) {
      if (x[0] === 'class') {
        x[1] = cls + ' ' + x[1]
        appended = true
      }
    })
    if (!appended) {
      attrs.push(['class', cls.trim()])
    }
    return attrs
  }

  function headingLevel(header) {
    return parseInt(header.charAt(1))
  }

  function last(arr) {
    return arr.slice(-1)[0]
  }

  md.core.ruler.push('header_sections', addSections)
}

// Use the headerSections plugin
markdownParser.use(headerSections, {
  h2: {
    wrapperClass: 'h2-wrap',
    innerClass: 'h2-inner',
  },
  h3: {
    wrapperClass: 'h3-wrap',
    innerClass: 'h3-inner',
  },
  tagName: 'div',
})

export default markdownParser