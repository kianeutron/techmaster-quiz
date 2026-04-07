import type { QuizQuestion } from "./quizz1";

export const linuxQuizz3: QuizQuestion[] = [
  {
    id: 1,
    question: "How can I check if ntp is synced?",
    options: [
      "date",
      "ntp -q",
      "ntpq -p",
      "ntp -status",
    ],
    correctAnswer: "ntpq -p",
    explanation:
      "ntpq -p shows a list of peers and their synchronization status. A '*' or '+' prefix indicates the peer is synced.",
  },
  {
    id: 2,
    question:
      "What is the correct UFW command to remove the FW-rule for all port 22 TCP traffic?",
    options: [
      "sudo ufw remove port 22 proto tcp",
      "sudo ufw delete port 22 proto tcp",
      "sudo ufw remove 22/tcp",
      "sudo ufw delete allow 22/tcp",
    ],
    correctAnswer: "sudo ufw delete allow 22/tcp",
    explanation:
      "The correct syntax is 'sudo ufw delete allow 22/tcp'. UFW rules must be deleted using the same syntax they were added with.",
  },
  {
    id: 3,
    question: "Where is the location of the NTP configuration file?",
    options: [
      "/etc/ntp.conf",
      "/var/lib/ntpd.conf",
      "/etc/ntp/config",
      "/usr/share/ntp.conf",
    ],
    correctAnswer: "/etc/ntp.conf",
    explanation:
      "The NTP configuration file is located at /etc/ntp.conf on most Linux distributions.",
  },
  {
    id: 4,
    question: "How to view a logfile in realtime?",
    options: [
      "logview",
      "zcat",
      "tail -f",
      "cat -f",
    ],
    correctAnswer: "tail -f",
    explanation:
      "tail -f follows a logfile in realtime, displaying new lines as they are appended to the file.",
  },
  {
    id: 5,
    question: "What is true about the 'nice command'?",
    options: [
      "A process with a lower niceness value is given higher priority and more CPU time",
      "A process with a lower niceness value is given higher I/O priority",
      "A process with a higher niceness value is given higher priority and more CPU time",
      "A process with a lower niceness value is given lower I/O priority",
    ],
    correctAnswer:
      "A process with a lower niceness value is given higher priority and more CPU time",
    explanation:
      "The nice value ranges from -20 (highest priority) to 19 (lowest priority). A lower niceness value means the process gets more CPU time.",
  },
  {
    id: 6,
    question: "What is the correct command to find the default gateway?",
    options: [
      "ip route | grep default",
      "ip route show default",
      "netstat -nr | grep default",
      "route -n | grep 0.0.0.0",
    ],
    correctAnswer: "ip route | grep default",
    explanation:
      "'ip route | grep default' shows the default gateway. You can also use 'ip route show default' for the same result.",
  },
  {
    id: 7,
    question:
      "What is the correct command to check the network interface configuration?",
    options: [
      "ifconfig",
      "ip addr show",
      "ip link show",
      "ip -a link",
    ],
    correctAnswer: "ip addr show",
    explanation:
      "'ip addr show' (or 'ip a') displays IP addresses and network interface configuration. 'ip link show' shows only layer 2 info without IP addresses.",
  },
  {
    id: 8,
    question:
      "What is the location and the file-name of syslog of a RHEL Linux system?",
    options: [
      "/var/log/event",
      "/var/log/messages",
      "/var/log/logging",
      "/var/log/lsystem",
    ],
    correctAnswer: "/var/log/messages",
    explanation:
      "On RHEL/CentOS systems, the main system log file is /var/log/messages. On Debian/Ubuntu it is /var/log/syslog.",
  },
  {
    id: 9,
    question:
      "What is the difference between 'deny' and 'reject' when using a connection rule in UFW to configure your firewall? (two or more are correct)",
    options: [
      "Deny blocks all connections and does not send any notifications that the request was dropped",
      "Deny allows all connections to be established, but sends notifications of all dropped messages",
      "Reject blocks the connection, but sends a notification that the request was dropped",
      "There is no difference, both commands will send a notification that the request was dropped",
    ],
    correctAnswer:
      "Deny blocks all connections and does not send any notifications that the request was dropped",
    explanation:
      "'deny' silently drops packets (no response to the sender), while 'reject' blocks the connection and sends back an ICMP error (connection rejected). A is correct (deny behavior) and C is correct (reject behavior).",
  },
  {
    id: 10,
    question:
      "Which authentication methods are supported by SSH? (more options might be correct)",
    options: [
      "Password authentication",
      "Host based authentication",
      "Two factor authentication",
      "Public key authentication",
    ],
    correctAnswer: "Public key authentication",
    explanation:
      "SSH supports all four methods: password authentication, host-based authentication, two-factor authentication (via keyboard-interactive or additional methods), and public key authentication. All options are correct.",
  },
  {
    id: 11,
    question:
      "Which of the following statements is true about NTP Stratums? (more answers are correct)",
    options: [
      "A NTP server that updates its time to a reference clock is referred to as a \"Stratum-1\" clock",
      "The lower the stratum number, lesser is the accuracy of the clock",
      "The higher the stratum number, lesser is the accuracy of the clock",
      "A NTP server that updates its time to a reference clock is referred to as a \"Stratum-0\" clock",
    ],
    correctAnswer:
      "A NTP server that updates its time to a reference clock is referred to as a \"Stratum-1\" clock",
    explanation:
      "A and C are correct. Stratum-1 servers sync directly with a reference clock (Stratum-0, e.g. GPS). The higher the stratum number, the further away from the reference clock, meaning lesser accuracy. A Stratum-0 is the reference clock itself, not the server syncing to it.",
  },
  {
    id: 12,
    question:
      "On a Red Hat (RHEL) system, what command is used to query, add and remove firewall-rules?",
    options: [
      "ufw",
      "firewalld",
      "firewall-cmd",
      "iptables",
    ],
    correctAnswer: "firewall-cmd",
    explanation:
      "On RHEL/CentOS/Fedora, 'firewall-cmd' is the command-line tool used to manage firewalld rules. UFW is used on Debian/Ubuntu. iptables is the lower-level tool that firewalld manages.",
  },
  {
    id: 13,
    question:
      "How can I check if NTP daemon is running? (Choose 2)",
    options: [
      "systemctl status ntp",
      "service status NTP",
      "pchk NTPD",
      "ps aux | grep ntpd",
    ],
    correctAnswer: "systemctl status ntp",
    explanation:
      "A and D are correct. 'systemctl status ntp' checks the systemd service status, and 'ps aux | grep ntpd' shows if the ntpd process is running. 'service status NTP' is incorrect syntax (should be 'service ntp status'), and 'pchk' is not a real command.",
  },
  {
    id: 14,
    question:
      "What is true about logging daemons? (more answers can be correct)",
    options: [
      "Dmesg is used for kernel ring logging",
      "The klogd daemon provides logging facilities for the Linux kernel",
      "The syslogd and rsyslogd daemon provides logging facilities for applications and programs",
      "The syslogd daemon can only log to /var/log/ (or subdirectories under /var/log)",
    ],
    correctAnswer: "Dmesg is used for kernel ring logging",
    explanation:
      "A, B, and C are correct. Dmesg shows kernel ring buffer messages. klogd handles kernel logging. syslogd/rsyslogd handle application logging. D is incorrect because syslogd can log to remote hosts, not just local files.",
  },
  {
    id: 15,
    question: "NTP runs on which port?",
    options: [
      "123 tcp",
      "312 tcp",
      "123 UDP",
      "312 UDP",
    ],
    correctAnswer: "123 UDP",
    explanation:
      "NTP (Network Time Protocol) runs on UDP port 123. It uses UDP because reliable time synchronization can tolerate some packet loss and UDP has lower overhead.",
  },
  {
    id: 16,
    question:
      "When using 'top' to check system resources, processes and CPU-usage: How to check the CPU-load per CPU on a multi-processor machine?",
    options: [
      "Press the 'c' key",
      "Press the '1' key",
      "Press the 'm' key",
      "This is not possible in TOP, install and use HTOP",
    ],
    correctAnswer: "Press the '1' key",
    explanation:
      "Pressing '1' in top toggles the display between a single CPU summary and individual CPU cores. 'c' toggles command names, 'm' toggles memory display.",
  },
  {
    id: 17,
    question:
      "How many types of clocks are usually defined on a Linux system?",
    options: ["1", "3", "4", "2"],
    correctAnswer: "2",
    explanation:
      "Linux systems typically define two types of clocks: the system clock (software clock maintained by the kernel) and the hardware clock (RTC - Real Time Clock on the motherboard).",
  },
  {
    id: 18,
    question:
      "What file on your Linux system is used to define your DNS servers?",
    options: [
      "/etc/resolv.conf",
      "/etc/network",
      "/etc/dns.conf",
      "/etc/host",
    ],
    correctAnswer: "/etc/resolv.conf",
    explanation:
      "/etc/resolv.conf is the configuration file for DNS resolvers. It contains nameserver entries that tell the system which DNS servers to use. /etc/hosts is for local hostname resolution, not DNS servers.",
  },
  {
    id: 19,
    question:
      "How to allow all UDP connections (incoming and outgoing) on port 123?",
    options: [
      "sudo ufw open port=123 proto=udp",
      "sudo ufw enable port 123 proto udp",
      "sudo ufw allow port 123 proto udp",
      "sudo ufw allow 123/udp",
    ],
    correctAnswer: "sudo ufw allow 123/udp",
    explanation:
      "The correct UFW syntax is 'sudo ufw allow 123/udp'. UFW uses the port/protocol format (e.g. 123/udp) for specifying rules.",
  },
  {
    id: 20,
    question:
      "How to send output from a Linux command in a single line to a second command?",
    options: [
      "Separate them with the '/'",
      "Separate them with the ';'",
      "Separate them with the ':'",
      "Separate them with the '|'",
    ],
    correctAnswer: "Separate them with the '|'",
    explanation:
      "The pipe character '|' (pipe) sends the output (stdout) of one command as input (stdin) to the next command. ';' runs commands sequentially but does not pipe output. '/' and ':' are not operators for this purpose.",
  },
];
