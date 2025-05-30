# Hydra Command Guide (Categorized)

## 🔰 Getting Started

| Function               | Command                      | Example                                      |
|------------------------|------------------------------|----------------------------------------------|
| Start Hydra Tool       | `hydra`                      | `hydra`                                      |
| Display Help           | `hydra -h` or `--help`       | `hydra -h`                                   |
| Show Module Usage Info | `-U`                         | `hydra -U`                                   |

---

## 🎯 Targeting

| Function                   | Command                 | Example                                                  |
|----------------------------|-------------------------|----------------------------------------------------------|
| Target a Host              | `-h <hostname>`         | `hydra -h 192.168.1.10`                                  |
| Set Protocol               | `<protocol>`            | `hydra -l admin -P pass.txt ssh://192.168.1.10`          |
| Set Port                   | `-s <port>`             | `hydra -l admin -P pass.txt -s 2222 ssh://192.168.1.10`  |
| Use SSL                    | `-S`                    | `hydra -S -l admin -P pass.txt ftp://example.com`        |
| Use Old SSL Version        | `-O`                    | `hydra -O -l admin -P pass.txt https://example.com`      |
| Load Targets From File     | `-M <file>`             | `hydra -L users.txt -P passwords.txt -M targets.txt ssh` |

---

## 🔐 Credentials

| Function                              | Command           | Example                                                            |
|---------------------------------------|-------------------|--------------------------------------------------------------------|
| Set Username                          | `-l <username>`   | `hydra -l admin`                                                   |
| Set Username List                     | `-L <file>`       | `hydra -L users.txt`                                               |
| Set Password                          | `-p <password>`   | `hydra -p password123`                                             |
| Set Password List                     | `-P <file>`       | `hydra -P rockyou.txt`                                             |
| Use Colon-Separated Credential File   | `-C <file>`       | `hydra -C creds.txt`                                               |
| Null/Login/Reverse Passwords          | `-e nsr`          | `hydra -l admin -e nsr -P passwords.txt ssh://192.168.1.10`        |
| Loop Through Users Sequentially       | `-u`              | `hydra -L users.txt -p 123456 -u ssh://192.168.1.10`               |

---

## 🔁 Brute Force Options

| Function                           | Command                 | Example                                                        |
|------------------------------------|--------------------------|----------------------------------------------------------------|
| Brute Force with Charset           | `-x MIN:MAX:CHARSET`     | `hydra -l admin -x 4:6:aA1 ssh://192.168.1.10`                 |
| Disable Symbols in Brute Force     | `-y`                     | `hydra -l admin -x 4:6:aA1 -y ssh://192.168.1.10`              |
| Brute Force Without Random Shuffle | `-r`                     | `hydra -x 4:6:aA1 -r ssh://192.168.1.10`                       |
| Module-Specific Options            | `-m <option>`            | `hydra -m "/admin" -l admin -P passwords.txt http-get://target`|

---

## ⚙️ Execution Control

| Function                              | Command            | Example                                                           |
|---------------------------------------|---------------------|-------------------------------------------------------------------|
| Execute Attack                        | *Command Format*    | `hydra -l <user> -P <wordlist> <protocol>://<host>`              |
| Set Threads                           | `-t <number>`       | `hydra -l admin -P pass.txt -t 32 ssh://192.168.1.10`            |
| Global Threads for Target List        | `-T <number>`       | `hydra -T 64 -M targets.txt ssh`                                 |
| Wait Time Between Connections         | `-w <seconds>`      | `hydra -w 5`                                                      |
| Wait Time Per Login Attempt           | `-c <seconds>`      | `hydra -c 10`                                                     |
| Exit After First Found Result         | `-f`                | `hydra -l admin -P passwords.txt -f ssh://192.168.1.10`          |
| Exit After All Found Results          | `-F`                | `hydra -F -L users.txt -P passwords.txt ssh://192.168.1.10`      |
| Restore Session                       | `-R`                | `hydra -R`                                                       |
| Ignore Restore File                   | `-I`                | `hydra -I`                                                       |

---

## 📝 Output & Logging

| Function              | Command          | Example                                                           |
|-----------------------|------------------|--------------------------------------------------------------------|
| Save Output to File   | `-o <file>`      | `hydra -l admin -P pass.txt -o results.txt ssh://192.168.1.10`    |
| Output Format         | `-b <format>`    | `hydra -b json`                                                   |

---

## 🔧 Advanced Options

| Function         | Command           | Example                                                        |
|------------------|-------------------|----------------------------------------------------------------|
| Quiet Mode       | `-q`              | `hydra -q -l admin -P passwords.txt ssh://192.168.1.10`        |
| Verbose Mode     | `-v` / `-V` / `-d`| `hydra -v -l admin -P pass.txt ssh://192.168.1.10`             |

---

## 🌐 Networking Options

| Function         | Command   | Example                                                            |
|------------------|-----------|--------------------------------------------------------------------|
| Use IPv4         | `-4`      | `hydra -4 -l admin -P passwords.txt ssh://192.168.1.10`           |
| Use IPv6         | `-6`      | `hydra -6 -l admin -P passwords.txt ssh://192.168.1.10`           |

---

## 🧩 Common Services/Protocols

| Hydra Service | Service/Protocol         | Description                                                                 | Example Command                                                                                     |
|---------------|---------------------------|-----------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| ftp           | File Transfer Protocol     | Brute-force FTP login credentials.                                          | `hydra -l admin -P /path/to/password_list.txt ftp://192.168.1.100`                                  |
| ssh           | Secure Shell               | Brute-force SSH login, commonly used for remote system access.              | `hydra -l root -P /path/to/password_list.txt ssh://192.168.1.100`                                   |
| http-get/post | HTTP Web Services          | Brute-force HTTP login forms (GET/POST).                                    | `hydra -l admin -P /path/to/password_list.txt http-post-form "/login.php:user=^USER^&pass=^PASS^:F=incorrect"` |
| smtp          | Simple Mail Transfer       | Attack email SMTP login.                                                    | `hydra -l admin -P /path/to/password_list.txt smtp://mail.server.com`                               |
| pop3          | Post Office Protocol       | Attack POP3 email login.                                                    | `hydra -l user@example.com -P /path/to/password_list.txt pop3://mail.server.com`                    |
| imap          | IMAP                       | Brute-force login for IMAP mail services.                                   | `hydra -l user@example.com -P /path/to/password_list.txt imap://mail.server.com`                    |
| mysql         | MySQL Database             | Brute-force MySQL database logins.                                          | `hydra -l root -P /path/to/password_list.txt mysql://192.168.1.100`                                 |
| mssql         | Microsoft SQL Server       | Brute-force MSSQL database logins.                                          | `hydra -l sa -P /path/to/password_list.txt mssql://192.168.1.100`                                   |
| vnc           | Virtual Network Computing  | Attack VNC for remote desktop login.                                        | `hydra -P /path/to/password_list.txt vnc://192.168.1.100`                                           |
| rdp           | Remote Desktop Protocol    | Brute-force Microsoft RDP login.                                            | `hydra -l admin -P /path/to/password_list.txt rdp://192.168.1.100`                                  |

---

> ✅ **Pro Tip:** Always use strong wordlists and rate-limit brute-force attempts to avoid detection or blacklisting.
> ⚠️ **Legal Notice:** Only use Hydra on systems you own or have written permission to test.
