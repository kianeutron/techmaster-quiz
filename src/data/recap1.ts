export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export const linuxRecap1: QuizQuestion[] = [
  {
    id: 1,
    question: "With an Alias you can...",
    options: [
      "Create short nicknames for longer commands",
      "Create new commands",
      "Create an alternative hostname",
      "Create an alias for a variable",
    ],
    correctAnswer: "Create short nicknames for longer commands",
    explanation:
      "An alias in Linux creates a shortcut or nickname for a longer command, making it easier to type frequently used commands.",
  },
  {
    id: 2,
    question: "Check the Console Text-Editors for Linux (one or more answers are correct)",
    options: ["Emacs", "Edit", "Pico", "Nano", "VIM"],
    correctAnswer: "Emacs, Nano, VIM",
    explanation:
      "Emacs, Nano, and VIM are console-based text editors that run in the terminal. 'Edit' is not a standard Linux console editor, and Pico is the predecessor of Nano (Nano is a Pine Composer clone).",
  },
  {
    id: 3,
    question:
      "When typing the command 'who' what will be the output?",
    options: [
      "userID and login duration",
      "password expiry",
      "userID and working directory",
      "list of all users logged in",
    ],
    correctAnswer: "list of all users logged in",
    explanation:
      "The 'who' command displays a list of all users currently logged into the system, showing their login name, terminal, and login time.",
  },
  {
    id: 4,
    question:
      "In VI which command saves your edited file and ends the VI-editor?",
    options: [
      ":wq",
      ":q!",
      ":x!",
      ":q",
    ],
    correctAnswer: ":wq",
    explanation:
      "The :wq command in VI writes (saves) the file and then quits the editor. :q! quits without saving, and :q only quits if no changes were made.",
  },
  {
    id: 5,
    question:
      "Which of the following answers is true about soft/hard links? (one or more answers are correct)",
    options: [
      "A soft link can point to a directory",
      "A hard link cannot cross filesystem boundaries",
      "Removing the original file will break a soft link",
      "A hard link points to the same inode as the original file",
      "A soft link (symlink) is a separate file that contains a path to the target",
    ],
    correctAnswer: "A soft link can point to a directory, A hard link cannot cross filesystem boundaries, Removing the original file will break a soft link, A hard link points to the same inode as the original file, A soft link (symlink) is a separate file that contains a path to the target",
    explanation:
      "All statements about soft/hard links are true. Soft links can point to directories and break when the original is removed. Hard links share the same inode and cannot cross filesystems. Soft links are separate files containing paths to targets.",
  },
  {
    id: 6,
    question:
      "What command do you use to create a 'shortcut' for a file or directory?",
    options: ["mp", "ln", "sc", "link"],
    correctAnswer: "ln",
    explanation:
      "The 'ln' command is used to create links (shortcuts) between files. Use 'ln -s' for symbolic (soft) links or 'ln' for hard links.",
  },
  {
    id: 7,
    question:
      "Which command removes only write permissions from every object below /project?",
    options: [
      "chmod -R o-w /project/*",
      "chmod -R a-w /project",
      "chmod -R a-w /project/*",
      "chmod -R u-w /project/*",
      "chmod 755 /project/*",
    ],
    correctAnswer: "chmod -R a-w /project/*",
    explanation:
      "chmod -R a-w /project/* recursively removes write permissions for all users (a = all) from every object below /project. The * ensures it targets contents, not the directory itself.",
  },
  {
    id: 8,
    question: "For a Linux CLI command, options are used to...",
    options: [
      "Open the help page",
      "Modify the core behavior of the command",
      "Execute the command",
      "List all available commands",
    ],
    correctAnswer: "Modify the core behavior of the command",
    explanation:
      "Options (also called flags) modify how a command behaves. For example, 'ls -l' uses the -l option to modify ls to show a long listing format.",
  },
  {
    id: 9,
    question:
      "Which command shows the current working directory?",
    options: ["cwd", "pwd", "dir", "path"],
    correctAnswer: "pwd",
    explanation:
      "The 'pwd' (print working directory) command displays the full path of the current working directory you are in.",
  },
  {
    id: 10,
    question:
      "What is the default directory in Linux where most logs are located?",
    options: ["/home/logs", "/etc/logs", "/usr/logs", "/var/log"],
    correctAnswer: "/var/log",
    explanation:
      "/var/log is the standard directory where most Linux system and application log files are stored, including syslog, auth.log, and kern.log.",
  },
  {
    id: 11,
    question: "What are KDE, GNOME and UNITY?",
    options: [
      "Linux distributions",
      "Text editors",
      "File systems",
      "Desktop environments",
    ],
    correctAnswer: "Desktop environments",
    explanation:
      "KDE, GNOME, and Unity are desktop environments that provide graphical user interfaces for Linux operating systems.",
  },
  {
    id: 12,
    question:
      "The long-term support time for SUSE LTS is...",
    options: ["13 years", "10 years", "15 years", "5 years"],
    correctAnswer: "10 years",
    explanation:
      "SUSE offers Long Term Service Pack Support (LTSS) for up to 10 years for SLES (SUSE Linux Enterprise Server), providing extended maintenance and security updates.",
  },
  {
    id: 13,
    question:
      "Which is the correct command to go to the home-directory?",
    options: ["cd /", "cd ~", "cd home", "cd .."],
    correctAnswer: "cd ~",
    explanation:
      "cd ~ navigates to the current user's home directory. The tilde (~) is a shortcut representing the home directory. 'cd /' goes to root, and 'cd ..' goes up one directory.",
  },
  {
    id: 14,
    question:
      "Which Linux application is a Relational Database Software package (RDBMS)? (one or more answers are correct)",
    options: ["MongoDB", "Sql4Linux", "MariaDB", "PostgreSQL", "MySQL"],
    correctAnswer: "MariaDB, PostgreSQL, MySQL",
    explanation:
      "MariaDB, PostgreSQL, and MySQL are all relational database management systems (RDBMS). MongoDB is a NoSQL document database, and Sql4Linux is not a real RDBMS.",
  },
  {
    id: 15,
    question:
      "Which command is used to display disk usage of files and directories?",
    options: ["df", "du", "disk", "fdisk"],
    correctAnswer: "du",
    explanation:
      "The 'du' (disk usage) command estimates and displays the disk space used by files and directories. 'df' shows filesystem disk space usage at the filesystem level.",
  },
  {
    id: 16,
    question: "LibreOffice is.. (one or more answers are correct)",
    options: [
      "A fork of the OpenOffice application",
      "Can be used for office productivity",
      "Is free",
      "An email client",
    ],
    correctAnswer: "A fork of the OpenOffice application, Can be used for office productivity, Is free",
    explanation:
      "LibreOffice is a free, open-source office productivity suite forked from OpenOffice.org. It includes word processing, spreadsheets, presentations, and more. It is not an email client.",
  },
  {
    id: 17,
    question:
      "Which command is used to find files in the Linux file system?",
    options: ["search", "locate", "find", "whereis"],
    correctAnswer: "find",
    explanation:
      "The 'find' command searches for files in a directory hierarchy based on various criteria like name, size, modification time, etc. 'locate' also finds files but uses a pre-built database.",
  },
  {
    id: 18,
    question:
      "What is the purpose of the 'grep' command?",
    options: [
      "Create new files",
      "Search for patterns in text",
      "Compress files",
      "Manage processes",
    ],
    correctAnswer: "Search for patterns in text",
    explanation:
      "The 'grep' command searches for patterns (regular expressions) within text input or files. It stands for 'Global Regular Expression Print'.",
  },
  {
    id: 19,
    question:
      "Which file contains the user account information in Linux?",
    options: ["/etc/users", "/etc/passwd", "/etc/accounts", "/etc/userinfo"],
    correctAnswer: "/etc/passwd",
    explanation:
      "/etc/passwd stores user account information including username, user ID, home directory, and default shell. Despite the name, passwords are stored in /etc/shadow.",
  },
  {
    id: 20,
    question:
      "What does the 'man' command do?",
    options: [
      "Manages users",
      "Displays the manual page for a command",
      "Creates a new user",
      "Shows memory usage",
    ],
    correctAnswer: "Displays the manual page for a command",
    explanation:
      "The 'man' command displays the system's manual pages (documentation) for commands, system calls, and other topics. It is the primary documentation system on Linux.",
  },
  {
    id: 21,
    question:
      "Which command is used to list directory contents?",
    options: ["dir", "ls", "list", "show"],
    correctAnswer: "ls",
    explanation:
      "The 'ls' command lists directory contents in Linux. It is one of the most frequently used commands and supports many options like -l (long format), -a (all files including hidden), etc.",
  },
  {
    id: 22,
    question:
      "What is the root user in Linux?",
    options: [
      "The user that installed Linux",
      "The user with the highest UID",
      "The superuser with unlimited privileges (UID 0)",
      "A user that can only read system files",
    ],
    correctAnswer: "The superuser with unlimited privileges (UID 0)",
    explanation:
      "The root user (UID 0) is the superuser in Linux with unrestricted access to all commands, files, and resources on the system.",
  },
  {
    id: 23,
    question:
      "What configuration file is built automatically to specify which Domain Name System (DNS) servers will be queried?",
    options: [
      "/etc/resolv.conf",
      "/etc/named.conf",
      "/etc/hosts",
      "/etc/sysconfig/dns",
    ],
    correctAnswer: "/etc/resolv.conf",
    explanation:
      "/etc/resolv.conf is the configuration file that specifies the DNS name servers to be queried. It is typically auto-generated by the system's network configuration.",
  },
  {
    id: 24,
    question:
      "Which Linux Licenses allow you to modify and redistribute software on Linux?",
    options: ["GPLv2 and GPLv3", "LGPL", "OSI", "GNU"],
    correctAnswer: "GPLv2 and GPLv3",
    explanation:
      "The GNU General Public License (GPLv2 and GPLv3) are the most common Linux licenses that guarantee the freedom to modify and redistribute software. Linux kernel uses GPLv2.",
  },
  {
    id: 25,
    question: "Select the Linux shells (one or more correct)",
    options: ["ZSH", "Bash", "KSH", "C Shell"],
    correctAnswer: "ZSH, Bash, KSH, C Shell",
    explanation:
      "All listed options are Linux/Unix shells. Bash (Bourne Again Shell) is the most common default shell. ZSH is known for its features, KSH (KornShell) is used in enterprise environments, and C Shell has C-like syntax.",
  },
  {
    id: 26,
    question: "What is a 'distribution'?",
    options: [
      "An open-source-export service for Linux",
      "The Linux kernel, tools and applications bundled together",
      "The graphical user interface components of Linux in a bundle",
      "An open-source-software tool that comes with Linux",
    ],
    correctAnswer: "The Linux kernel, tools and applications bundled together",
    explanation:
      "A Linux distribution (distro) is a complete operating system that bundles the Linux kernel with software packages, tools, libraries, and often a desktop environment.",
  },
  {
    id: 27,
    question: "What is RHEL?",
    options: [
      "A graphical user interface for Linux",
      "A Linux command",
      "A Linux distribution",
      "A Linux Package Manager",
    ],
    correctAnswer: "A Linux distribution",
    explanation:
      "RHEL (Red Hat Enterprise Linux) is a commercial Linux distribution developed by Red Hat, designed for enterprise use with long-term support, security, and certification.",
  },
  {
    id: 28,
    question:
      "Which command is used to change the file ownership?",
    options: ["chmod", "chown", "chgrp", "chperm"],
    correctAnswer: "chown",
    explanation:
      "The 'chown' (change owner) command changes the ownership of files and directories. 'chmod' changes permissions, 'chgrp' changes group ownership, and 'chperm' is not a standard command.",
  },
];
