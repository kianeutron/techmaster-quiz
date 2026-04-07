import type { QuizQuestion } from "./quizz1";

export const linuxExam1: QuizQuestion[] = [
  {
    id: 1,
    question: "Which command is used to display the routing table in Linux?",
    options: [
      "route -n",
      "ip route show",
      "netstat -rn",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "All three commands can display the routing table. 'route -n' shows numeric addresses, 'ip route show' is the modern iproute2 command, and 'netstat -rn' shows routing table with numeric addresses.",
  },
  {
    id: 2,
    question:
      "Which of the following is the correct command to check the network interface configuration in Linux?",
    options: [
      "ifconfig",
      "ip addr show",
      "ip link show",
      "ip -a link",
    ],
    correctAnswer: "ip addr show",
    explanation:
      "'ip addr show' (or 'ip a') displays IP addresses and network interface configuration including IP address, netmask, and state. 'ip link show' only shows layer 2 info (MAC, MTU, state) without IP addresses.",
  },
  {
    id: 3,
    question:
      "Which of the following is the correct command to display the IP address(es) of the system?",
    options: [
      "ifconfig",
      "ip addr show",
      "ip link show",
      "ip -a link",
    ],
    correctAnswer: "ip addr show",
    explanation:
      "'ip addr show' displays all IP addresses assigned to network interfaces. 'ifconfig' also works but is deprecated. 'ip link show' shows only layer 2 info without IP addresses.",
  },
  {
    id: 4,
    question: "What is the correct command to find the default gateway in Linux?",
    options: [
      "ip route | grep default",
      "ip route show default",
      "netstat -rn | grep 0.0.0.0",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "All three commands can find the default gateway. 'ip route | grep default' and 'ip route show default' use the modern iproute2 suite. 'netstat -rn | grep 0.0.0.0' uses the older netstat tool.",
  },
  {
    id: 5,
    question: "Which command is used to check open ports in Linux?",
    options: [
      "netstat -tulpn",
      "ss -tulpn",
      "lsof -i",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "All three commands can check open ports. 'netstat -tulpn' shows TCP/UDP listening ports with process info. 'ss -tulpn' is the modern replacement for netstat. 'lsof -i' lists open files including network sockets.",
  },
  {
    id: 6,
    question: "Which command is used to check DNS resolution in Linux?",
    options: [
      "dig",
      "nslookup",
      "host",
      "All of the above",
    ],
    correctAnswer: "All of the above",
    explanation:
      "All three commands are used for DNS resolution. 'dig' is the most flexible and detailed. 'nslookup' is simpler and widely available. 'host' provides a concise output.",
  },
  {
    id: 7,
    question: "Which of the following is true about the nice command in Linux?",
    options: [
      "A process with a lower niceness value gets higher priority and more CPU time",
      "A process with a higher niceness value gets higher priority and more CPU time",
      "A process with a lower niceness value gets lower priority and less CPU time",
      "The nice command is used to set the I/O priority of a process",
    ],
    correctAnswer:
      "A process with a lower niceness value gets higher priority and more CPU time",
    explanation:
      "The nice value ranges from -20 (highest priority) to 19 (lowest priority). A lower niceness value means higher priority and more CPU time. The nice command affects CPU scheduling priority, not I/O priority.",
  },
  {
    id: 8,
    question: "Which of the following is the correct command to check if NTP is synchronized?",
    options: [
      "ntpq -p",
      "ntpstat",
      "ntp -q",
      "ntp -status",
    ],
    correctAnswer: "ntpstat",
    explanation:
      "'ntpstat' reports the NTP synchronization status directly. 'ntpq -p' shows peer status (you need to look for a '*' prefix to confirm sync). 'ntp -q' is not a standard command. 'ntp -status' is also not standard.",
  },
  {
    id: 9,
    question: "What is the location of the NTP configuration file?",
    options: [
      "/etc/ntp.conf",
      "/var/lib/ntpd.conf",
      "/etc/ntp/config",
      "/usr/share/ntp.conf",
    ],
    correctAnswer: "/etc/ntp.conf",
    explanation:
      "The NTP configuration file is located at /etc/ntp.conf on most Linux distributions. For chrony (modern NTP replacement), it's /etc/chrony.conf.",
  },
  {
    id: 10,
    question:
      "Which of the following is true about NTP Stratums? (more answers are correct)",
    options: [
      'A NTP server that syncs to a reference clock is referred to as a "Stratum-1" clock',
      "The lower the stratum number, lesser is the accuracy of the clock",
      "The higher the stratum number, lesser is the accuracy of the clock",
      'A NTP server that syncs to a reference clock is referred to as a "Stratum-0" clock',
    ],
    correctAnswer:
      'A NTP server that syncs to a reference clock is referred to as a "Stratum-1" clock',
    explanation:
      'A and C are correct. A Stratum-1 server syncs directly with a reference clock (e.g., GPS, atomic clock - Stratum-0). The higher the stratum number, the further away from the reference clock, meaning lesser accuracy. Stratum-0 is the reference clock itself, not the server.',
  },
  {
    id: 11,
    question:
      "Which of the following is true about logging daemons? (more answers can be correct)",
    options: [
      "Dmesg is used for kernel ring logging",
      "The klogd daemon provides logging facilities for the Linux kernel",
      "The syslogd and rsyslogd daemon provides logging facilities for applications and programs",
      "The syslogd daemon can only log to /var/log/ (or subdirectories under /var/log)",
    ],
    correctAnswer: "Dmesg is used for kernel ring logging",
    explanation:
      "A, B, and C are correct. Dmesg shows kernel ring buffer messages. klogd handles kernel logging. syslogd/rsyslogd handle application logging. D is incorrect because syslogd can log to remote hosts, not just local /var/log/ files.",
  },
  {
    id: 12,
    question:
      "Which of the following is true about logging daemons? (more answers can be correct)",
    options: [
      "Dmesg is used for kernel ring logging",
      "The klogd daemon provides logging facilities for the Linux kernel",
      "The syslogd and rsyslogd daemon provides logging facilities for applications and programs",
      "The syslogd daemon can only log to /var/log/ (or subdirectories under /var/log)",
    ],
    correctAnswer: "Dmesg is used for kernel ring logging",
    explanation:
      "A, B, and C are correct. Dmesg shows kernel ring buffer messages. klogd handles kernel logging. syslogd/rsyslogd handle application logging. D is incorrect because syslogd can log to remote hosts, not just local /var/log/ files.",
  },
  {
    id: 13,
    question:
      "Which of the following is the correct command to set a static IP temporarily in Linux?",
    options: [
      "ip addr add 192.168.1.100/24 dev eth0",
      "ifconfig eth0 192.168.1.100 netmask 255.255.255.0",
      "Both A and B",
      "Neither A nor B",
    ],
    correctAnswer: "Both A and B",
    explanation:
      "Both commands set a temporary (non-persistent) static IP. 'ip addr add' is the modern iproute2 method. 'ifconfig' is the older but still functional method. Both changes are lost on reboot.",
  },
  {
    id: 14,
    question:
      "What is the correct UFW command to allow all UDP connections on port 123?",
    options: [
      "sudo ufw open port=123 proto=udp",
      "sudo ufw enable port 123 proto udp",
      "sudo ufw allow port 123 proto udp",
      "sudo ufw allow 123/udp",
    ],
    correctAnswer: "sudo ufw allow 123/udp",
    explanation:
      "The correct UFW syntax is 'sudo ufw allow 123/udp'. UFW uses the port/protocol format. Options A and B use invalid syntax ('open' and 'enable' with 'port=' are not valid UFW commands). Option C is also incorrect - 'port' keyword is not used in UFW.",
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
      "NTP (Network Time Protocol) runs on UDP port 123. It uses UDP because time synchronization can tolerate some packet loss and UDP has lower overhead than TCP.",
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
      "Pressing '1' in top toggles between a single aggregate CPU line and individual CPU core lines. 'c' toggles command path display, 'm' toggles memory display mode.",
  },
  {
    id: 17,
    question:
      "What is the correct command to create a tar.gz archive from a directory?",
    options: [
      "tar -czf archive.tar.gz directory/",
      "tar -xzf archive.tar.gz",
      "tar -tzf archive.tar.gz",
      "tar -uzf archive.tar.gz",
    ],
    correctAnswer: "tar -czf archive.tar.gz directory/",
    explanation:
      "'tar -czf' creates (-c) a gzip-compressed (-z) archive file (-f). The flags stand for: c=create, z=gzip, f=file. -x is extract, -t is list contents, -u is update.",
  },
  {
    id: 18,
    question: "What is the correct command to extract a tar.gz archive?",
    options: [
      "tar -xzf archive.tar.gz",
      "tar -czf archive.tar.gz directory/",
      "tar -tzf archive.tar.gz",
      "tar -uzf archive.tar.gz",
    ],
    correctAnswer: "tar -xzf archive.tar.gz",
    explanation:
      "'tar -xzf' extracts (-x) a gzip-compressed (-z) archive file (-f). The flags: x=extract, z=gzip, f=file.",
  },
  {
    id: 19,
    question:
      "How many types of clocks are usually defined on a Linux system?",
    options: ["1", "3", "4", "2"],
    correctAnswer: "2",
    explanation:
      "Linux systems typically define two types of clocks: the system clock (software clock maintained by the kernel) and the hardware clock (RTC - Real Time Clock on the motherboard).",
  },
  {
    id: 20,
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
      "/etc/resolv.conf is the configuration file for DNS resolvers. It contains nameserver entries. /etc/hosts is for local hostname resolution (not /etc/host). /etc/network and /etc/dns.conf are not standard DNS configuration files.",
  },
  {
    id: 21,
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
      "The correct syntax is 'sudo ufw delete allow 22/tcp'. UFW rules must be deleted using the same syntax they were added with. 'remove' is not a valid UFW command (use 'delete').",
  },
  {
    id: 22,
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
      "The pipe character '|' sends stdout of one command as stdin to the next command. ';' runs commands sequentially but does not pipe output. '/' and ':' are not command operators.",
  },
  {
    id: 23,
    question: "What is the correct command to view a logfile in realtime?",
    options: [
      "logview",
      "zcat",
      "tail -f",
      "cat -f",
    ],
    correctAnswer: "tail -f",
    explanation:
      "'tail -f' follows a logfile in realtime, displaying new lines as they are appended. 'logview' is not a standard Linux command. 'zcat' decompresses gzipped files. 'cat -f' is not valid (cat has no -f flag for following).",
  },
  {
    id: 24,
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
    id: 25,
    question:
      "What is the difference between 'deny' and 'reject' when using a connection rule in UFW? (two or more are correct)",
    options: [
      "Deny blocks all connections and does not send any notifications that the request was dropped",
      "Deny allows all connections to be established, but sends notifications of all dropped messages",
      "Reject blocks the connection, but sends a notification that the request was dropped",
      "There is no difference, both commands will send a notification that the request was dropped",
    ],
    correctAnswer:
      "Deny blocks all connections and does not send any notifications that the request was dropped",
    explanation:
      "A and C are correct. 'deny' silently drops packets (no response to sender). 'reject' blocks the connection and sends back an ICMP port-unreachable error. B is wrong (deny does NOT allow connections). D is wrong (there IS a difference).",
  },
  {
    id: 26,
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
    id: 27,
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
      "A and D are correct. 'systemctl status ntp' checks the systemd service status. 'ps aux | grep ntpd' shows if the ntpd process is running. 'service status NTP' has wrong syntax (should be 'service ntp status'). 'pchk' is not a real command.",
  },
  {
    id: 28,
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
      "The correct UFW syntax is 'sudo ufw allow 123/udp'. UFW uses the port/protocol format. Options A, B, and C use invalid syntax.",
  },
  {
    id: 29,
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
      "All four methods are correct. SSH supports password authentication, host-based authentication, two-factor authentication (via keyboard-interactive), and public key authentication.",
  },
  {
    id: 30,
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
      "On RHEL/CentOS/Fedora, 'firewall-cmd' is the command-line tool for managing firewalld rules. UFW is used on Debian/Ubuntu. iptables is the lower-level tool that firewalld manages. firewalld is the service/daemon, not the command.",
  },
];
