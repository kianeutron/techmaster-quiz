import type { QuizQuestion } from "./quizz1";

export const linuxQuizz4: QuizQuestion[] = [
  {
    id: 1,
    question: "How can I edit a cronjob?",
    options: [
      "crontab -l",
      "crontab -e",
      "crontab",
      "crontab -m",
    ],
    correctAnswer: "crontab -e",
    explanation:
      "crontab -e opens the current user's crontab in the default editor for editing. crontab -l lists the current crontab entries.",
  },
  {
    id: 2,
    question:
      'How can I check if a directory exists? path = "/tmp/sound"',
    options: [
      'if [ -e "$path" ]:',
      'if [ -w "$path" ]:',
      'if [ -d "$path" ]:',
      'if [ -r "$path" ]:',
    ],
    correctAnswer: 'if [ -d "$path" ]:',
    explanation:
      "The -d test operator checks if a path exists AND is a directory. -e checks if it exists (file or directory), -w checks if it's writable, -r checks if it's readable.",
  },
  {
    id: 3,
    question: "How can I check if a file is readable?",
    options: [
      'if [[ -d $file ]]; then echo "File is not readable"; exit 0; fi',
      'if [[ -r $file ]]; then echo "File is not readable"; exit 0; fi',
    ],
    correctAnswer: 'if [[ -r $file ]]; then echo "File is not readable"; exit 0; fi',
    explanation:
      "The -r test operator checks if a file is readable. -d checks if it's a directory, not readability. Note: this question had only 2 options in the original quiz.",
  },
  {
    id: 4,
    question:
      "Cron at 16:00 on day-of-month 1 in every month from January through December",
    options: [
      "0 16 1 1-12 /home/frank/BackUpAll.sh; /home/frank/ScpTarBackup.sh",
      "16 0 1 1-12 /home/frank/BackUpAll.sh; /home/frank/ScpTarBackup.sh",
      "0 4 1 1-12 /home/frank/BackUpAll.sh; /home/frank/ScpTarBackup.sh",
      "16 16 1 1-12 /home/frank/BackUpAll.sh; /home/frank/ScpTarBackup.sh",
    ],
    correctAnswer:
      "0 16 1 1-12 /home/frank/BackUpAll.sh; /home/frank/ScpTarBackup.sh",
    explanation:
      'Cron format: minute hour day-of-month month day-of-week. "0 16 1 1-12" means minute 0, hour 16 (4 PM), day 1, months 1-12 (all). Alternatively, "0 16 1 * *" would also work since * means "every".',
  },
  {
    id: 5,
    question:
      "Which command is used to find a specific text string in files?",
    options: [
      "grep",
      "find",
      "findstr",
      "locate",
    ],
    correctAnswer: "grep",
    explanation:
      "grep (Global Regular Expression Print) searches for text patterns within files. find searches for files by name/type/size. findstr is Windows-only. locate searches for files by filename in a database.",
  },
  {
    id: 6,
    question:
      "Which of the following statements is true about Apache? (more answers might be correct)",
    options: [
      "Uses httpd.conf for configuration",
      "Runs as HTTPD on RHEL systems, otherwise as Apache2",
      "You need to check rights and permissions on files in /var/www and config-files",
      "Apache is an open source application and webserver",
    ],
    correctAnswer: "Apache is an open source application and webserver",
    explanation:
      "All options are correct. A: Apache uses httpd.conf (or apache2.conf on Debian). B: The service is called httpd on RHEL and apache2 on Debian/Ubuntu. C: File permissions on /var/www and config files must be properly set. D: Apache is indeed open source.",
  },
  {
    id: 7,
    question:
      "How can you search for a text-string in the crontab when using crontab -e?",
    options: [
      "Using the 's' command",
      "Using the 'l' command",
      "Using the 'f' command",
      "Using the '/' command",
    ],
    correctAnswer: "Using the '/' command",
    explanation:
      "crontab -e opens the crontab in the default editor (usually vi/vim or nano). In vi/vim, pressing '/' followed by a search string initiates a forward search.",
  },
  {
    id: 8,
    question: "How to end a for-loop in a linux script?",
    options: [
      "STOP",
      "END",
      "ROF",
      "DONE",
    ],
    correctAnswer: "DONE",
    explanation:
      "In bash scripting, for-loops are terminated with the 'done' keyword. The syntax is: for i in ...; do ...; done",
  },
  {
    id: 9,
    question: "What is the correct syntax for a for-loop in a bash script?",
    options: [
      "for i in {1..10}; do echo $i; done",
      "for i in {1..10} { echo $i; done }",
      "for i in {1..10}; echo $i; done",
      "for (i=1; i<=10; i++) { echo $i; done }",
    ],
    correctAnswer: "for i in {1..10}; do echo $i; done",
    explanation:
      "The correct bash for-loop syntax uses 'do' after the iteration specification and 'done' to close the loop. Semicolons separate the parts. Options B and D use curly braces incorrectly, and C is missing the 'do' keyword.",
  },
  {
    id: 10,
    question: "What is the correct syntax for a while-loop in a bash script?",
    options: [
      "while [ condition ]; do ...; done",
      "while (condition) { ...; done }",
      "while condition do ...; done",
      "while [ condition ] do ...; done",
    ],
    correctAnswer: "while [ condition ]; do ...; done",
    explanation:
      "The correct bash while-loop requires square brackets with a semicolon, the 'do' keyword, commands, and 'done'. Options B uses C-style parentheses, and C/D are missing the semicolon after the condition.",
  },
  {
    id: 11,
    question:
      "What is the correct syntax for an if-then-else statement in a bash script?",
    options: [
      "if [ condition ]; then ... else ... fi",
      "if (condition) { ... else ... }",
      "if condition then ... else ... fi",
      "if [ condition ] then ... else ... fi",
    ],
    correctAnswer: "if [ condition ]; then ... else ... fi",
    explanation:
      "The correct bash if-then-else syntax requires square brackets around the condition, a semicolon before 'then', and 'fi' to close. Options B uses C-style braces, and C/D are missing the semicolon after the condition.",
  },
  {
    id: 12,
    question: "What is the correct syntax for a case statement in a bash script?",
    options: [
      'case $var in pattern1) ... ;; pattern2) ... ;; esac',
      "case ($var) { pattern1) ... break; pattern2) ... break; }",
      'case $var of pattern1) ... ;; pattern2) ... ;; esac',
      'case $var in pattern1) ... ;; pattern2) ... ;; endcase',
    ],
    correctAnswer: 'case $var in pattern1) ... ;; pattern2) ... ;; esac',
    explanation:
      'The correct bash case syntax uses "case $var in", patterns followed by ")", commands, ";;" to separate cases, and "esac" (reverse of case) to close. Option C uses "of" (shell syntax, not bash). Option D uses "endcase" which is invalid.',
  },
  {
    id: 13,
    question:
      "What is the correct command to display the size of a file in human-readable format?",
    options: [
      "du -h filename",
      "du -s filename",
      "du -m filename",
      "du -k filename",
    ],
    correctAnswer: "du -h filename",
    explanation:
      "du -h displays file/directory sizes in human-readable format (KB, MB, GB). -s shows only total size, -m shows in megabytes, -k shows in kilobytes.",
  },
  {
    id: 14,
    question: "What is the correct command to display the size of a file?",
    options: [
      "du filename",
      "du -h filename",
      "du -s filename",
      "du -k filename",
    ],
    correctAnswer: "du filename",
    explanation:
      "du filename (without flags) displays the disk usage of a file in the default block size (usually KB). The question asks for the basic command to display file size.",
  },
  {
    id: 15,
    question:
      "How can I redirect both stdout and stderr to the same file?",
    options: [
      "command > file 2>&1",
      "command &> file",
      "command > file 2>err",
      "command 2>&1 > file",
    ],
    correctAnswer: "command > file 2>&1",
    explanation:
      "'command > file 2>&1' redirects stdout to file, then redirects stderr (fd 2) to where stdout (fd 1) is going (the file). 'command &> file' is a bash shorthand that also works. Option C redirects stderr to a separate file. Option D has the order wrong - it redirects stderr to the original stdout (terminal) first, then stdout to file.",
  },
  {
    id: 16,
    question: "How can I redirect stderr to stdout?",
    options: [
      "2>&1",
      "1>&2",
      "&>1",
      ">2&1",
    ],
    correctAnswer: "2>&1",
    explanation:
      "2>&1 redirects file descriptor 2 (stderr) to file descriptor 1 (stdout). 1>&2 would do the opposite (redirect stdout to stderr). &>1 and >2&1 are invalid syntax.",
  },
];
