import { QuizQuestion } from "./recap1";

export const linuxRecap2: QuizQuestion[] = [
  {
    id: 1,
    question:
      "How to set permission: user: read, write, and execute, members of your group can read and execute it, others only read?",
    options: [
      "chmod a=rwx,g=wx,o=r filename",
      "chmod g=rwx,g=rx,o=r filename",
      "chmod o=rwx,g=rx,o=r filename",
      "chmod u=rwx,g=rx,o=r filename",
    ],
    correctAnswer: "chmod u=rwx,g=rx,o=r filename",
    explanation:
      "'u' sets owner (user) permissions to rwx (7), 'g' sets group permissions to rx (5), and 'o' sets others permissions to r (4). The correct syntax is chmod u=rwx,g=rx,o=r.",
  },
  {
    id: 2,
    question: "The /etc/passwd file doesn't contain?",
    options: [
      "login shell name",
      "userid",
      "password",
      "home directory for a user",
    ],
    correctAnswer: "password",
    explanation:
      "Modern Linux systems store password hashes in /etc/shadow, not in /etc/passwd. The /etc/passwd file contains an 'x' placeholder in the password field.",
  },
  {
    id: 3,
    question:
      "What command can be used for searching for files on the filesystem in Linux?",
    options: ["search", "locate", "lsof", "trace"],
    correctAnswer: "locate",
    explanation:
      "The 'locate' command quickly searches for files by name using a pre-built database. 'find' is another option but locate is faster for simple name searches.",
  },
  {
    id: 4,
    question: "How to identify which shell you are using?",
    options: ["#!/bin/sh", "ENV", "echo $SHELL", "$PATH"],
    correctAnswer: "echo $SHELL",
    explanation:
      "The $SHELL environment variable contains the path to your current login shell. Echoing it displays which shell you are using (e.g., /bin/bash, /bin/zsh).",
  },
  {
    id: 5,
    question:
      "What command would you use to check how much memory is being used by Linux?",
    options: ["mem", "meminfo", "free", "df"],
    correctAnswer: "free",
    explanation:
      "The 'free' command displays the total amount of free and used physical and swap memory in the system. 'df' shows disk space, not memory.",
  },
  {
    id: 6,
    question: "How to display the current working directory?",
    options: ["dir", "whereami", "pwd", "ls -la"],
    correctAnswer: "pwd",
    explanation:
      "'pwd' stands for 'print working directory' and displays the full path of the current directory you are in.",
  },
  {
    id: 7,
    question:
      "How to give all permissions to everyone on the system to a file?",
    options: [
      "chmod 04440 filename",
      "chmod 0777 filename",
      "chmod 1770 filename",
      "chmod 04477 filename",
    ],
    correctAnswer: "chmod 0777 filename",
    explanation:
      "chmod 0777 gives read (4), write (2), and execute (1) permissions to the owner, group, and others. 4+2+1 = 7 for each category.",
  },
  {
    id: 8,
    question:
      "How to set a file to be sticky, read and write by the owner, read by their primary group and inaccessible by others?",
    options: [
      "chmod 0440 filename",
      "chmod 0770 filename",
      "chmod 1640 filename",
      "chmod 4640 filename",
    ],
    correctAnswer: "chmod 1640 filename",
    explanation:
      "The sticky bit is set with the leading 1. Owner gets rw (6), group gets r (4), others get no permissions (0). So 1640 is correct.",
  },
  {
    id: 9,
    question: "How to re-execute a command from your command-history?",
    options: ["re", "!", "this is not possible in Linux.", "exec"],
    correctAnswer: "!",
    explanation:
      "The '!' (bang) operator re-executes commands from history. For example, '!!' reruns the last command, and '!n' reruns command number n from history.",
  },
  {
    id: 10,
    question: 'Can you delete a directory with the command: "rm -rf" ?',
    options: [
      "Only using the Root-user",
      "Yes",
      "No",
      "Only if the directory is empty",
    ],
    correctAnswer: "Yes",
    explanation:
      "'rm -rf' recursively (-r) and forcefully (-f) deletes directories and all their contents, regardless of whether they are empty or not.",
  },
  {
    id: 11,
    question: "How to rename a file in Linux?",
    options: [
      "using the mv command",
      "using the rename command",
      "using the ren command",
      "using the copy command",
    ],
    correctAnswer: "using the mv command",
    explanation:
      "The 'mv' (move) command is used to rename files in Linux. 'mv oldname newname' renames the file. There is also a 'rename' command but 'mv' is the standard way.",
  },
  {
    id: 12,
    question: 'What can you do with the command "top"?',
    options: [
      "go to the top of a file in the VI editor",
      "display system resources",
      "go to top of terminal",
      "change the behavior of the CLI",
    ],
    correctAnswer: "display system resources",
    explanation:
      "The 'top' command displays real-time system summary information including CPU usage, memory usage, and running processes — similar to Task Manager.",
  },
  {
    id: 13,
    question: "How to delete a directory and all its contents?",
    options: [
      "del <name (and path if required) of directory>",
      "rm -rf <name (and path if required) of directory>",
      "rm <name (and path if required) of directory>",
      "rmdir -rf <name (and path if required) of directory>",
    ],
    correctAnswer: "rm -rf <name (and path if required) of directory>",
    explanation:
      "'rm -rf' recursively and forcefully removes a directory and all its contents. 'rmdir' only works on empty directories. 'del' is a Windows command.",
  },
  {
    id: 14,
    question: "What is the shortcut to go to home directory?",
    options: ["gohome", "dir -", "ls -h", "cd"],
    correctAnswer: "cd",
    explanation:
      "Running 'cd' without any arguments takes you directly to your home directory. You can also use 'cd ~' which explicitly references the home directory.",
  },
  {
    id: 15,
    question: "Is it legal to edit the Linux Kernel?",
    options: [
      "Yes",
      "Sometimes, depending on the distribution",
      "Only if you have a valid License for the distribution",
      "No",
    ],
    correctAnswer: "Yes",
    explanation:
      "The Linux Kernel is released under the GPL (GNU General Public License), which allows anyone to view, modify, and distribute the source code freely.",
  },
  {
    id: 16,
    question: "Suppose you want to update the date-time (timestamp) of a file?",
    options: [
      "use the mod command",
      "use the touch command",
      "use the du command",
      "use the stat command",
    ],
    correctAnswer: "use the touch command",
    explanation:
      "The 'touch' command updates the access and modification timestamps of a file to the current time. If the file doesn't exist, it creates an empty file.",
  },
  {
    id: 17,
    question:
      "Which commands can be used for looking into the offline (built-in) help in the Linux CLI?",
    options: ["help, assist", "man, info", "assist, manual", "support, assist"],
    correctAnswer: "man, info",
    explanation:
      "'man' displays the manual pages for commands, and 'info' provides more detailed documentation. Both are built-in offline help systems in Linux.",
  },
  {
    id: 18,
    question: "What is the 'Shebang'?",
    options: [
      "an environmental variable used in your shell",
      "a powerful command to kill processes",
      "a command in Linux to modify files and directories",
      "the first line in your script",
    ],
    correctAnswer: "the first line in your script",
    explanation:
      "The shebang (#!) is the first line of a script that tells the system which interpreter to use. For example, '#!/bin/bash' tells the system to use bash to run the script.",
  },
  {
    id: 19,
    question: "How to extract a Gzipped tar-ball?",
    options: [
      "This cannot be done in one command",
      "tar -exgz <filename>",
      "tar -xvzf <filename>",
      "tar -cvf <filename>",
    ],
    correctAnswer: "tar -xvzf <filename>",
    explanation:
      "'tar -xvzf' extracts (-x) verbosely (-v) a gzipped (-z) file (-f). The flags can also be written as 'tar -xzvf' or 'tar --extract --gzip --file'.",
  },
  {
    id: 20,
    question: 'What does the following command do? who | wc -l ?',
    options: [
      "List the number of users in the system",
      "List the users logged in",
      "Writes the contents of who command to the screen",
      "List the number of users logged in",
    ],
    correctAnswer: "List the number of users logged in",
    explanation:
      "'who' lists currently logged-in users, and 'wc -l' counts the number of lines. Piped together, 'who | wc -l' outputs the count of logged-in users.",
  },
];
