import type { QuizQuestion } from "./quizz1";

export const linuxExam2: QuizQuestion[] = [
  {
    id: 1,
    question:
      "Which of the following statements is true about the /etc/passwd file?",
    options: [
      "It contains hashed passwords",
      "It contains user account information",
      "It contains group information",
      "It contains password aging information",
    ],
    correctAnswer: "It contains user account information",
    explanation:
      "/etc/passwd contains user account information (username, UID, GID, home dir, shell). Hashed passwords were historically stored here but are now in /etc/shadow. Group info is in /etc/group. Password aging is in /etc/shadow.",
  },
  {
    id: 2,
    question:
      "Which of the following statements is true about the /etc/shadow file? (more answers might be correct)",
    options: [
      "It contains user account information without passwords",
      "It contains hashed passwords and password aging info",
      "It is readable only by root",
      "It is readable only by root and members of the shadow group",
    ],
    correctAnswer:
      "It contains hashed passwords and password aging info",
    explanation:
      "B and C are correct. /etc/shadow contains hashed passwords and password aging info. It is readable only by root (permissions 640 or 600). On some systems, members of the shadow group may also read it.",
  },
  {
    id: 3,
    question:
      "Which of the following commands can be used to add a new user in Linux?",
    options: [
      "useradd",
      "adduser",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both 'useradd' and 'adduser' can create new users. 'useradd' is the low-level command on all distributions. 'adduser' is a higher-level Perl script (on Debian/Ubuntu) that provides interactive prompts and sets up defaults.",
  },
  {
    id: 4,
    question:
      "Which of the following commands can be used to modify an existing user account in Linux?",
    options: [
      "usermod",
      "useradd -m",
      "adduser -m",
      "Both A and B",
    ],
    correctAnswer: "usermod",
    explanation:
      "'usermod' is the correct command to modify existing user accounts. 'useradd -m' creates a new user with a home directory, it does not modify existing users. 'adduser -m' also creates a new user.",
  },
  {
    id: 5,
    question:
      "Which of the following commands can be used to delete a user account in Linux?",
    options: [
      "userdel",
      "userdel -r",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. 'userdel' deletes the user account but keeps the home directory. 'userdel -r' deletes the user account AND removes the home directory and mail spool.",
  },
  {
    id: 6,
    question:
      "Which of the following commands can be used to change the password of a user in Linux?",
    options: [
      "passwd",
      "chage",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "passwd",
    explanation:
      "'passwd' is the command to change a user's password. 'chage' is used to change password aging/expiry information, not the password itself.",
  },
  {
    id: 7,
    question:
      "Which of the following commands can be used to set password aging for a user in Linux?",
    options: [
      "passwd -x",
      "chage",
      "Both A and B",
      "Neither A and B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. 'passwd -x' sets the maximum password age. 'chage' is a more comprehensive tool for setting password aging policies (min age, max age, warning period, inactivity period, expiry date).",
  },
  {
    id: 8,
    question:
      "Which of the following commands can be used to change the login shell of a user?",
    options: [
      "usermod -s",
      "chsh",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. 'usermod -s /bin/bash username' changes the shell (requires root). 'chsh' changes the shell for the current user (or another user with root).",
  },
  {
    id: 9,
    question:
      "Which of the following commands can be used to add a user to a group in Linux?",
    options: [
      "usermod -aG groupname username",
      "gpasswd -a username groupname",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. 'usermod -aG' adds a user to a supplementary group (-a is append, -G is group list). 'gpasswd -a' also adds a user to a group. Without -a in usermod, the user is removed from all other supplementary groups.",
  },
  {
    id: 10,
    question:
      "Which of the following commands can be used to create a new group in Linux?",
    options: [
      "groupadd",
      "addgroup",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. 'groupadd' is the standard command on all distributions. 'addgroup' is a symlink to groupadd on some systems, and a higher-level script on Debian/Ubuntu.",
  },
  {
    id: 11,
    question:
      "Which of the following commands can be used to delete a group in Linux?",
    options: [
      "groupdel",
      "delgroup",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. 'groupdel' is the standard command. 'delgroup' is a symlink to groupdel on some systems, and a higher-level script on Debian/Ubuntu.",
  },
  {
    id: 12,
    question:
      "Which of the following commands can be used to check the groups a user belongs to?",
    options: [
      "groups username",
      "id username",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. 'groups username' shows the group memberships. 'id username' shows UID, GID, and all group memberships with their numeric IDs.",
  },
  {
    id: 13,
    question:
      "Which of the following is the correct command to list all users on a Linux system?",
    options: [
      "cat /etc/passwd",
      "cut -d: -f1 /etc/passwd",
      "awk -F: '{print $1}' /etc/passwd",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "All three work. 'cat /etc/passwd' shows all entries (including system users and service accounts). 'cut -d: -f1' extracts just the username field. 'awk -F:' also extracts the first field.",
  },
  {
    id: 14,
    question:
      "Which of the following is the correct command to list all groups on a Linux system?",
    options: [
      "cat /etc/group",
      "cut -d: -f1 /etc/group",
      "awk -F: '{print $1}' /etc/group",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "All three work. 'cat /etc/group' shows all group entries. 'cut -d: -f1' extracts just the group name. 'awk -F:' also extracts the first field.",
  },
  {
    id: 15,
    question:
      "Which of the following is the correct command to find files owned by a specific user?",
    options: [
      "find / -user username",
      "find / -group groupname",
      "find / -type f -user username",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "All three work for finding files owned by a user. A finds all files by user. B finds by group. C finds only regular files (-type f) by user. They are all valid find commands.",
  },
  {
    id: 16,
    question:
      "Which of the following is the correct command to change file ownership in Linux?",
    options: [
      "chown",
      "chmod",
      "chgrp",
      "Both A and C",
    ],
    correctAnswer: "Both A and C",
    explanation:
      "'chown' changes the owner (and optionally the group) of a file. 'chgrp' changes the group ownership. 'chmod' changes permissions, not ownership.",
  },
  {
    id: 17,
    question:
      "Which of the following is the correct command to change file permissions in Linux?",
    options: [
      "chown",
      "chmod",
      "chgrp",
      "Both A and C",
    ],
    correctAnswer: "chmod",
    explanation:
      "'chmod' changes file permissions (read/write/execute for owner/group/others). 'chown' changes ownership. 'chgrp' changes group ownership.",
  },
  {
    id: 18,
    question:
      "Which of the following is the correct command to change file group ownership in Linux?",
    options: [
      "chown",
      "chmod",
      "chgrp",
      "Both A and C",
    ],
    correctAnswer: "Both A and C",
    explanation:
      "'chgrp' changes group ownership. 'chown :groupname' also changes group ownership. 'chmod' changes permissions, not ownership.",
  },
  {
    id: 19,
    question:
      "Which of the following is the correct command to set the sticky bit on a directory?",
    options: [
      "chmod +t directory",
      "chmod 1777 directory",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. 'chmod +t' adds the sticky bit. 'chmod 1777' sets sticky bit (1) plus rwxrwxrwx (777). However, 'chmod 1777' also sets full permissions, while '+t' only adds the sticky bit to existing permissions.",
  },
  {
    id: 20,
    question:
      "Which of the following is the correct command to set the SUID bit on a file?",
    options: [
      "chmod u+s filename",
      "chmod 4755 filename",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. 'chmod u+s' adds the SUID bit. 'chmod 4755' sets SUID (4) plus rwxr-xr-x (755). SUID allows a file to be executed with the permissions of the file's owner.",
  },
  {
    id: 21,
    question:
      "Which of the following is the correct command to set the SGID bit on a file?",
    options: [
      "chmod g+s filename",
      "chmod 2755 filename",
      "Both A and B",
      "Neither A and B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. 'chmod g+s' adds the SGID bit. 'chmod 2755' sets SGID (2) plus rwxr-xr-x (755). SGID on files executes with group owner permissions; on directories, new files inherit the directory's group.",
  },
  {
    id: 22,
    question: "What is the default umask value on most Linux systems?",
    options: ["022", "077", "0022", "0077"],
    correctAnswer: "022",
    explanation:
      "The default umask on most Linux systems is 022. This means new files get 644 (rw-r--r--) permissions and new directories get 755 (rwxr-xr-x) permissions. 022 and 0022 are the same value.",
  },
  {
    id: 23,
    question: "What does the umask value 022 mean?",
    options: [
      "Owner has full access, group and others have no access",
      "Owner has full access, group and others have read and execute",
      "Owner has full access, group and others have read and write",
      "Owner has full access, group and others have execute only",
    ],
    correctAnswer:
      "Owner has full access, group and others have read and execute",
    explanation:
      "Umask 022 subtracts write permission (2) from group and others. For directories: 777 - 022 = 755 (rwxr-xr-x). For files: 666 - 022 = 644 (rw-r--r--). So owner has full access, group and others have read and execute on directories.",
  },
  {
    id: 24,
    question:
      "Which of the following is the correct command to find files with SUID bit set?",
    options: [
      "find / -perm -4000",
      "find / -perm /4000",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work but behave slightly differently. '-perm -4000' matches files where ALL permission bits including SUID are set (mode exactly includes 4000). '-perm /4000' matches files where ANY of the SUID bits are set. In practice, both find SUID files.",
  },
  {
    id: 25,
    question:
      "Which of the following is the correct command to find files with SGID bit set?",
    options: [
      "find / -perm -2000",
      "find / -perm /2000",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. '-perm -2000' matches files where SGID bit is set in all permission bits. '-perm /2000' matches files where any of the SGID bits are set.",
  },
  {
    id: 26,
    question:
      "Which of the following is the correct command to find files with sticky bit set?",
    options: [
      "find / -perm -1000",
      "find / -perm /1000",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. '-perm -1000' matches files where the sticky bit is set. '-perm /1000' also matches files with sticky bit.",
  },
  {
    id: 27,
    question:
      "Which of the following is the correct command to find files by size?",
    options: [
      "find / -size +100M",
      "find / -size -100M",
      "find / -size 100M",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "All three are valid. '+100M' finds files larger than 100MB. '-100M' finds files smaller than 100MB. '100M' finds files exactly 100MB. They are all valid size-based search criteria.",
  },
  {
    id: 28,
    question:
      "Which of the following is the correct command to find files modified in the last 7 days?",
    options: [
      "find / -mtime -7",
      "find / -ctime -7",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "find / -mtime -7",
    explanation:
      "'find / -mtime -7' finds files modified in the last 7 days based on file modification time. '-ctime' checks inode change time (metadata changes like permissions), which is different from actual content modification.",
  },
  {
    id: 29,
    question:
      "Which of the following is the correct command to find files accessed in the last 7 days?",
    options: [
      "find / -atime -7",
      "find / -ctime -7",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "find / -atime -7",
    explanation:
      "'find / -atime -7' finds files accessed (read) in the last 7 days. '-atime' is access time. '-ctime' is inode change time, not access time.",
  },
  {
    id: 30,
    question:
      "Which of the following is the correct command to find empty files?",
    options: [
      "find / -empty",
      "find / -size 0",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. '-empty' matches empty files and empty directories. '-size 0' matches files with zero size. The difference is that '-empty' also finds empty directories.",
  },
  {
    id: 31,
    question:
      "Which of the following is the correct command to find files by name?",
    options: [
      "find / -name filename",
      "locate filename",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. 'find / -name' searches the filesystem in real-time (slower but always up-to-date). 'locate' searches a pre-built database (faster but may not include very recent files).",
  },
  {
    id: 32,
    question:
      "Which of the following is the correct command to find files by type?",
    options: [
      "find / -type f",
      "find / -type d",
      "find / -type l",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "All three are valid. '-type f' finds regular files. '-type d' finds directories. '-type l' finds symbolic links. Other types include b (block device), c (character device), s (socket), p (named pipe).",
  },
  {
    id: 33,
    question:
      "Which of the following is the correct command to find files by permissions?",
    options: [
      "find / -perm 644",
      "find / -perm -644",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work but differently. '-perm 644' matches files with EXACTLY 644 permissions. '-perm -644' matches files where the owner has at least rw, group has at least r, and others have at least r (and potentially more).",
  },
  {
    id: 34,
    question:
      "Which of the following is the correct command to find files by owner?",
    options: [
      "find / -user username",
      "find / -group groupname",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. '-user' finds files owned by a specific user. '-group' finds files owned by a specific group.",
  },
  {
    id: 35,
    question:
      "Which of the following is the correct command to find files by modification time?",
    options: [
      "find / -mtime +7 (older than 7 days)",
      "find / -mtime -7 (modified in last 7 days)",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both are valid. '-mtime +7' finds files modified MORE than 7 days ago (older). '-mtime -7' finds files modified LESS than 7 days ago (recent). '-mtime 7' finds files modified exactly 7 days ago.",
  },
  {
    id: 36,
    question:
      "Which of the following is the correct command to find and delete files older than 7 days?",
    options: [
      "find / -mtime +7 -delete",
      "find / -mtime +7 -exec rm {} \\;",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. '-delete' is a built-in find action (faster, handles special filenames better). '-exec rm {} \\;' runs the rm command for each file found. Use -delete when possible as it's safer and more efficient.",
  },
  {
    id: 37,
    question:
      "Which of the following is the correct command to find and change permissions of files?",
    options: [
      "find / -type f -exec chmod 644 {} \\;",
      "find / -type f -exec chmod 644 +",
      "find / -type f | xargs chmod 644",
      "A and C",
    ],
    correctAnswer: "A and C",
    explanation:
      "A and C are correct. A uses '-exec' to run chmod on each file. C pipes the file list to xargs which passes them as arguments to chmod. B is incorrect syntax ('+' is not valid after chmod).",
  },
  {
    id: 38,
    question:
      "Which of the following is the correct command to find and change ownership of files?",
    options: [
      "find / -user olduser -exec chown newuser {} \\;",
      "find / -user olduser -exec chown newuser:newgroup {} \\;",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. A changes only the owner. B changes both the owner and group (newuser:newgroup). Both use -exec to apply chown to each file found.",
  },
  {
    id: 39,
    question:
      "Which of the following is the correct command to find and copy files to another directory?",
    options: [
      'find / -name "*.txt" -exec cp {} /target/ \\;',
      'find / -name "*.txt" | xargs -I {} cp {} /target/',
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. A uses '-exec' to run cp for each matching file. B pipes to xargs with '-I {}' which replaces {} with each filename. Both copy all .txt files to /target/.",
  },
  {
    id: 40,
    question:
      "Which of the following is the correct command to find and move files to another directory?",
    options: [
      'find / -name "*.txt" -exec mv {} /target/ \\;',
      'find / -name "*.txt" | xargs -I {} mv {} /target/',
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both work. A uses '-exec mv' to move each file. B pipes to xargs with '-I {}' to move each file. Both move all .txt files to /target/.",
  },
];
