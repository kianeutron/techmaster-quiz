export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export const linuxQuizz1: QuizQuestion[] = [
  {
    id: 1,
    question: "How can you check the current SSH daemon version installed on your Ubuntu/Debian Linux system?",
    options: [
      "yum -check ssh",
      "sshd --version",
      "rpm -ihv ssh",
      "ssh -V",
    ],
    correctAnswer: "ssh -V",
    explanation: "ssh -V displays the SSH client version, which also shows the daemon version on Ubuntu/Debian systems.",
  },
  {
    id: 2,
    question: "How to disable the root user to login in a Linux server running SSH?",
    options: [
      "Open the file '/var/log/sshd_config' and change the parameter 'PermitRootLogin yes' to 'PermitRootLogin no' and restart the ssh service",
      "Open the file '/etc/ssh/sshd_config' and change the parameter 'PermitRootLogin yes' to 'PermitRootLogin no' and restart the ssh service",
      "Open the file '/var/log/auth.log' and delete the parameter 'PermitRootLogin' and restart the server",
      "Do nothing; The Root user can never login using SSH",
    ],
    correctAnswer: "Open the file '/etc/ssh/sshd_config' and change the parameter 'PermitRootLogin yes' to 'PermitRootLogin no' and restart the ssh service",
    explanation: "The SSH daemon configuration is in /etc/ssh/sshd_config. Setting PermitRootLogin to 'no' disables root SSH login.",
  },
  {
    id: 3,
    question: "On which port does Apache run by default?",
    options: ["80", "443", "22", "8080"],
    correctAnswer: "80",
    explanation: "Apache's default port is 80 (HTTP). Port 443 is HTTPS, 22 is SSH, and 8080 is an alternative HTTP port.",
  },
  {
    id: 4,
    question: "The correct command in Linux to restart the SSH daemon is:",
    options: [
      "systemctl ssh restart",
      "sudo systemctl restart sshd",
      "sudo service restart sshd",
      "sshd restart now",
    ],
    correctAnswer: "sudo systemctl restart sshd",
    explanation: "systemctl is the modern systemd command. The correct syntax is 'sudo systemctl restart sshd'.",
  },
  {
    id: 5,
    question: "The command to create an SSH private and public key pair is:",
    options: [
      "pubpriv",
      "ssh-keygen",
      "ssh -c",
      "ssh-copy-id -i /home/bob/.ssh/id_rsa REMOTESERVER",
    ],
    correctAnswer: "ssh-keygen",
    explanation: "ssh-keygen generates, manages, and converts authentication keys for ssh. ssh-copy-id copies keys to a remote server.",
  },
  {
    id: 6,
    question: "What is true about SSH-CONNECT?",
    options: [
      "The SSH-CONNECT connection protocol runs above the user authentication protocol to multiplex the single encrypted channel into multiple logical channels",
      "The SSH-CONNECT protocol manages server authentication, privacy and data integrity",
      "The SSH-CONNECT protocol runs on the transport layer and authenticates the client's credentials to the server",
      "SSH-CONNECT connection manages both server authentication and user authentication",
    ],
    correctAnswer: "The SSH-CONNECT connection protocol runs above the user authentication protocol to multiplex the single encrypted channel into multiple logical channels",
    explanation: "SSH-CONNECT is the connection protocol layer that runs above authentication and provides multiplexed channels (shell, SFTP, port forwarding, etc.). Transport layer handles encryption/integrity, and authentication handles user credentials.",
  },
  {
    id: 7,
    question: "Open-SSH provides programs such as:",
    options: ["sftp", "ssh", "sshd", "scp"],
    correctAnswer: "sftp",
    explanation: "OpenSSH provides all of these programs: sftp (SSH File Transfer Protocol), ssh (client), sshd (daemon), and scp (secure copy). All are correct answers.",
  },
  {
    id: 8,
    question: "What is the purpose of the SSH-TRANSPORT layer protocol?",
    options: [
      "It handles server host key exchange and verifies the server's identity",
      "It manages user authentication (password, public key, etc.)",
      "It multiplexes channels for shell sessions and file transfers",
      "It encrypts the connection using AES-256 only",
    ],
    correctAnswer: "It handles server host key exchange and verifies the server's identity",
    explanation: "The SSH-TRANSPORT layer protocol is responsible for server authentication (host key exchange), key exchange, encryption, and data integrity.",
  },
  {
    id: 9,
    question: "What is defined in the file '~/.ssh/authorized_keys'?",
    options: [
      "List of authorized public keys for servers, verified by the server to authenticate the user when login is attempted",
      "RSA private key of the user, verified by the server to authenticate the user when login is attempted",
      "List of servers, along with host keys accessed by the user",
      "DSA and RSA private key of the user",
    ],
    correctAnswer: "List of authorized public keys for servers, verified by the server to authenticate the user when login is attempted",
    explanation: "authorized_keys contains the public keys that are permitted to log into this account. When a user tries to connect, the server checks this file.",
  },
  {
    id: 10,
    question: "How to use more commands in a single line on the command-prompt?",
    options: [
      "Separate them with the '|'",
      "Separate them with the ';'",
      "Separate them with the ':'",
      "Separate them with the '/'",
    ],
    correctAnswer: "Separate them with the ';'",
    explanation: "The semicolon (;) separates multiple commands on a single line. The pipe (|) sends output of one command as input to another.",
  },
  {
    id: 11,
    question: "Default Apache stores its HTML pages in:",
    options: ["/var/www", "/var/www/html", "/apache/www", "/etc/www"],
    correctAnswer: "/var/www/html",
    explanation: "On Debian/Ubuntu systems, Apache's default document root is /var/www/html.",
  },
  {
    id: 12,
    question: "What is the correct Linux command to stop the 'mysql-server' (assuming it is installed) when working under Root?",
    options: [
      "mysql stop",
      "stop service mysql",
      "systemctl stop mysql.service",
      "service stop mysql",
    ],
    correctAnswer: "systemctl stop mysql.service",
    explanation: "The correct systemctl syntax is 'systemctl stop mysql.service'. The old 'service mysql stop' also works but the systemd syntax is preferred.",
  },
  {
    id: 13,
    question: "What is the correct syntax for creating a backup (export) of a MySQL database?",
    options: [
      "mysql -u -p databasename < dbsample.sql",
      "mysql -u -p databasename > dbsample.sql",
      "mysqldump -u -p databasename < dbsample.sql",
      "mysqldump -u -p databasename > dbsample.sql",
    ],
    correctAnswer: "mysqldump -u -p databasename > dbsample.sql",
    explanation: "mysqldump is used to export/backup a database. The > operator redirects the output to a file. The < operator is for importing.",
  },
  {
    id: 14,
    question: "The default configuration file of Apache on Debian-based Linux distributions is?",
    options: [
      "var/htpd.conf",
      "var/apache/apache.conf",
      "/etc/htpd.conf",
      "etc/apache2/apache2.conf",
    ],
    correctAnswer: "etc/apache2/apache2.conf",
    explanation: "On Debian-based systems, Apache's main configuration file is /etc/apache2/apache2.conf.",
  },
  {
    id: 15,
    question: "What is the correct syntax for a secure copy command, to copy the file \"foobar.txt\" from the local host to a remote host?",
    options: [
      "scp foobar.txt remotehost.edu/some/remote/directory -u your_username",
      "scp your_username@remotehost.edu/some/remote/directory foobar.txt",
      "scp -u your_username@remotehost.edu/some/remote/directory foobar.txt",
      "scp foobar.txt your_username@remotehost.edu/some/remote/directory",
    ],
    correctAnswer: "scp foobar.txt your_username@remotehost.edu/some/remote/directory",
    explanation: "SCP syntax for copying TO remote: scp [source] [user@host:destination]. The source comes first, then the remote destination.",
  },
];
