// =====================================================================
// FILE SYSTEM
// =====================================================================
const FS = {
  '/': { type: 'dir', children: ['home'] },
  '/home': { type: 'dir', children: ['guest'] },
  '/home/guest': {
    type: 'dir',
    children: ['about.txt', 'projects', 'skills.txt', 'contact.sh', 'secret.log']
  },
  '/home/guest/about.txt': {
    type: 'file',
    content: `
╔══════════════════════════════════════╗
║         ABOUT ZAIN TARIQ             ║
╚══════════════════════════════════════╝

  Name    : Zain Tariq
  Role    : CS Student @ FAST-NUCES
  Batch   : 2024 (2nd Year)
  Based   : Pakistan
  Email   : zaint715@gmail.com
  Phone   : +923399111502

  Bio:
  ─────────────────────────────────────
  Hey there! I'm a 2nd-year CS student
  at FAST-NUCES with a passion for AI,
  algorithms, and building things that
  actually work.

  I love turning complex problems into
  clean software — from AI logic agents
  and pathfinding visualizers to web
  apps and data structure tools.

  Currently exploring AI, constraint
  solving, and full-stack web dev.

  GitHub  : github.com/Zain715
  LinkedIn: linkedin.com/in/zain-tariq

  Education:
  ─────────────────────────────────────
  BS Computer Science — FAST-NUCES
  2023 – Present

  Coursework: DSA, OOP, Discrete Math,
  Digital Logic, Assembly Language,
  Database Systems

  Type 'ls projects/' to see my work.
  Type 'cat skills.txt' for tech stack.
`
  },
  '/home/guest/projects': {
    type: 'dir',
    children: ['wumpus.md', 'pathfinder.md', 'sudoku.md', 'timetable.md', 'ds-visualizer.md', 'quiz.md']
  },
  '/home/guest/projects/wumpus.md': {
    type: 'file',
    content: `
╔══════════════════════════════════════╗
║   PROJECT: Dynamic Wumpus Logic Agent║
╚══════════════════════════════════════╝

  Type    : AI / Web Simulation
  Tech    : Python, Propositional Logic,
            CNF Resolution
  Status  : Completed ✓

  Description:
  ─────────────────────────────────────
  Web-based simulation of the classic
  Wumpus World AI problem. Uses
  propositional logic and CNF resolution
  for safe agent navigation.

  Key Features:
  • Automated agent with adjustable
    grid size
  • Manual & auto execution modes
  • Retro sci-fi terminal interface
  • Live knowledge base dashboard
  • Real-time CNF inference logger

  Code: github.com/Zain715/Dynamic-Wumpus-Logic-Agent
`
  },
  '/home/guest/projects/pathfinder.md': {
    type: 'file',
    content: `
╔══════════════════════════════════════╗
║   PROJECT: AI Pathfinding Visualizer ║
╚══════════════════════════════════════╝

  Type    : AI / Interactive Visualizer
  Tech    : Python / JavaScript
            BFS, DFS, A*, Dijkstra
  Status  : Completed ✓

  Description:
  ─────────────────────────────────────
  Interactive visualizer demonstrating
  four classic pathfinding algorithms
  with real-time step-by-step animation.

  Key Features:
  • Custom maze drawing tool
  • Real-time algorithm animation
  • Color-coded visited/frontier/path
  • Helps students understand search
    behavior and time complexity

  Code: github.com/Zain715/AI-Pathfinding-Visualizer
`
  },
  '/home/guest/projects/sudoku.md': {
    type: 'file',
    content: `
╔══════════════════════════════════════╗
║      PROJECT: Sudoku CSP Solver      ║
╚══════════════════════════════════════╝

  Type    : AI / Constraint Solving
  Tech    : Python, CSP, Backtracking,
            Arc Consistency (AC-3)
  Status  : Completed ✓

  Description:
  ─────────────────────────────────────
  Sudoku solver using CSP framework
  with AC-3 arc consistency and
  backtracking search.

  Key Features:
  • MRV & degree heuristics
  • Full constraint propagation
  • Solves expert-level puzzles
  • Sub-second solve on hard puzzles
  • Benchmarked across difficulty levels

  Code: github.com/Zain715/SudokuCSP
`
  },
  '/home/guest/projects/timetable.md': {
    type: 'file',
    content: `
╔══════════════════════════════════════╗
║   PROJECT: Smart Timetable Generator ║
╚══════════════════════════════════════╝

  Type    : Discrete Math / Algorithms
  Tech    : C++, Graph Coloring,
            Constraint Logic
  Status  : Completed ✓

  Description:
  ─────────────────────────────────────
  Timetable generator applying graph
  coloring for conflict-free schedule
  assignment. Built as a Discrete
  Mathematics project.

  Key Features:
  • Graph coloring for conflict resolve
  • Handles faculty availability,
    room capacity, credit hours
  • Supports up to 20 courses
  • Zero scheduling conflicts

  Code: github.com/Zain715/Smart-TimeTable-Generator-DiscreteProject
`
  },
  '/home/guest/projects/ds-visualizer.md': {
    type: 'file',
    content: `
╔══════════════════════════════════════╗
║  PROJECT: Data Structures Visualizer ║
╚══════════════════════════════════════╝

  Type    : Educational Web Tool
  Tech    : HTML, CSS, JavaScript
            (vanilla — no frameworks)
  Status  : Completed ✓

  Description:
  ─────────────────────────────────────
  Interactive browser-based tool to
  visualize core data structures with
  step-by-step animations.

  Key Features:
  • Stacks, queues, linked lists, trees
  • Insertion, deletion & traversal
    animations
  • Pure vanilla JS — lightweight
  • Learning aid for fellow students

  Code: github.com/Zain715/Data-Structures-Visualizer
`
  },
  '/home/guest/projects/quiz.md': {
    type: 'file',
    content: `
╔══════════════════════════════════════╗
║        PROJECT: Quiz Website         ║
╚══════════════════════════════════════╝

  Type    : Web App
  Tech    : HTML, CSS, JavaScript
  Status  : Completed ✓

  Description:
  ─────────────────────────────────────
  Full-featured quiz application with
  a clean responsive UI and multiple
  quiz categories.

  Key Features:
  • Timed questions
  • Score tracking & instant feedback
  • Randomized question/answer order
  • Multiple quiz categories
  • Result summary screen

  Code: github.com/Zain715/QuizWebsite
`
  },
  '/home/guest/skills.txt': {
    type: 'file',
    content: `
╔══════════════════════════════════════╗
║         TECHNICAL SKILLS            ║
╚══════════════════════════════════════╝

  LANGUAGES:
  ──────────────────────────────────
  [████████░░] C / C++       ★★★★☆
               OOP, DSA, console apps,
               graph algorithms

  [███████░░░] HTML / CSS    ★★★★☆
               Semantic HTML, Flexbox,
               Grid, responsive design

  [██████░░░░] Python        ★★★☆☆
               AI agents, CSP solving,
               scripting, algorithms

  [█████░░░░░] JavaScript    ★★★☆☆
               Vanilla JS, web apps,
               interactive UIs

  [████░░░░░░] SQL           ★★☆☆☆
               Queries, Oracle DB

  [███░░░░░░░] Assembly      ★★☆☆☆
               NASM / MASM, DOSBox

  TOOLS & PLATFORMS:
  ──────────────────────────────────
  • Git & GitHub
  • Docker
  • Vercel
  • Oracle DB
  • DOSBox

  CONCEPTS:
  ──────────────────────────────────
  • Data Structures & Algorithms
  • Object-Oriented Programming
  • Discrete Mathematics
  • Digital Logic Design
  • AI & Logic Agents
  • Constraint Satisfaction (CSP)
  • Graph Coloring & Pathfinding
`
  },
  '/home/guest/contact.sh': {
    type: 'file',
    content: `
╔══════════════════════════════════════╗
║         CONTACT ZAIN                 ║
╚══════════════════════════════════════╝

  #!/bin/bash
  # Run this script to reach out!

  EMAIL="zaint715@gmail.com"
  GITHUB="https://github.com/Zain715"
  LINKEDIN="https://linkedin.com/in/zain-tariq"
  PHONE="+923399111502"

  echo "Let's connect and build something!"

  ─────────────────────────────────────

  Email   → zaint715@gmail.com
  GitHub  → github.com/Zain715
  LinkedIn→ linkedin.com/in/zain-tariq
  Phone   → +923399111502

  I'm open to:
  • Internship opportunities
  • Collaborative projects
  • CS discussions & networking
`
  },
  '/home/guest/secret.log': {
    type: 'file',
    content: `
  >> CLASSIFIED ACCESS LOG <<

  You found a secret file. Nice snooping!
  
  Since you're here, try these hidden commands:
  
    matrix  — Enter the Matrix
    snake   — Play Snake
    guess   — Number guessing game
    sudo rm -rf /  — Go on, try it ;)
    zain    — A secret about me
    
  Good luck out there, hacker.
`
  }
};

// =====================================================================
// TERMINAL STATE
// =====================================================================
let cwd = '/home/guest';
let history = [];
let historyIdx = -1;
let guessNumber = null;
let guessAttempts = 0;
let guessActive = false;
let matrixActive = false;
let snakeActive = false;

const output = document.getElementById('output-area');
const input = document.getElementById('cmd-input');
const cwdDisplay = document.getElementById('cwd-display');

function getCwdDisplay() {
  return cwd.replace('/home/guest', '~') || '/';
}

function print(text, cls = '') {
  const lines = (text + '').split('\n');
  lines.forEach(line => {
    const div = document.createElement('div');
    div.className = 'output-line' + (cls ? ' ' + cls : '');
    if (line === '') {
      div.className += ' blank';
      div.innerHTML = '&nbsp;';
    } else {
      div.textContent = line;
    }
    output.appendChild(div);
  });
  output.scrollTop = output.scrollHeight;
}

function printCmd(cmd) {
  print(`${getCwdDisplay()}$ ${cmd}`, 'cmd');
}

// =====================================================================
// PATH RESOLUTION
// =====================================================================
function resolvePath(p) {
  if (!p) return cwd;
  if (p.startsWith('/')) return p.replace(/\/+$/, '') || '/';
  if (p === '~') return '/home/guest';
  if (p.startsWith('~/')) return '/home/guest/' + p.slice(2);
  const parts = cwd.split('/').filter(Boolean);
  p.split('/').forEach(seg => {
    if (seg === '..') parts.pop();
    else if (seg !== '.') parts.push(seg);
  });
  return '/' + parts.join('/');
}

// =====================================================================
// LS HELPER
// =====================================================================
function lsDir(path) {
  const node = FS[path];
  if (!node || node.type !== 'dir') {
    print(`ls: cannot access '${path}': No such directory`, 'err');
    return;
  }
  node.children.forEach(name => {
    const childPath = path === '/' ? '/' + name : path + '/' + name;
    const child = FS[childPath];
    const div = document.createElement('div');
    div.className = 'output-line';

    if (child && child.type === 'dir') {
      const span = document.createElement('span');
      span.className = 'clickable-dir';
      span.textContent = name + '/';
      span.onclick = () => runCommand(`cd ${childPath}`);
      div.appendChild(span);
    } else {
      const span = document.createElement('span');
      span.className = 'clickable-file';
      span.textContent = name;
      span.onclick = () => runCommand(`cat ${name}`);
      div.appendChild(span);
    }

    output.appendChild(div);
  });
  output.scrollTop = output.scrollHeight;
}

// =====================================================================
// COMMANDS
// =====================================================================
const COMMANDS = {
  help() {
    print('');
    print('  ╔══════════════════════════════════════════╗', 'dim');
    print('  ║           ZAINOS COMMAND REFERENCE       ║', 'dim');
    print('  ╚══════════════════════════════════════════╝', 'dim');
    print('');
    const cmds = [
      ['help',       'Show this help menu'],
      ['whoami',     'Display bio & identity'],
      ['ls [dir]',   'List directory contents'],
      ['cd <dir>',   'Change directory'],
      ['cat <file>', 'Read a file'],
      ['clear',      'Clear terminal output'],
      ['pwd',        'Print working directory'],
      ['echo <msg>', 'Echo a message'],
      ['date',       'Show current date/time'],
      ['matrix',     '[ CLASSIFIED ]'],
      ['snake',      '[ CLASSIFIED ]'],
      ['guess',      '[ CLASSIFIED ]'],
    ];
    cmds.forEach(([cmd, desc]) => {
      print(`  ${cmd.padEnd(18)} — ${desc}`);
    });
    print('');
    print('  TIP: Press TAB to autocomplete. Click files/dirs to open them.', 'dim');
    print('');
  },

  whoami() {
    print('');
    print('  ┌─────────────────────────────────────┐', 'dim');
    print('  │  USER RECORD: guest:zain-tariq       │', 'dim');
    print('  └─────────────────────────────────────┘', 'dim');
    print('');
    print('  Identity  : Zain Tariq',                           'info');
    print('  Role      : CS Student @ FAST-NUCES (Batch 2024)', 'info');
    print('  Passions  : AI, Algorithms, Web Dev',              'info');
    print('  Email     : zaint715@gmail.com',                   'info');
    print('  Status    : [AVAILABLE FOR OPPORTUNITIES]',        'accent');
    print('');
    print('  "Turning complex problems into clean software."',  'white');
    print('');
    print('  Run: cat about.txt    — for full profile',         'dim');
    print('       ls projects/     — to see 6 projects',        'dim');
    print('       cat skills.txt   — for tech stack',           'dim');
    print('');
  },

  ls(args) {
    const target = args[0] ? resolvePath(args[0]) : cwd;
    print('');
    lsDir(target);
    print('');
  },

  cd(args) {
    if (!args[0] || args[0] === '~') {
      cwd = '/home/guest';
      cwdDisplay.textContent = getCwdDisplay() + '/';
      return;
    }
    const target = resolvePath(args[0]);
    if (FS[target] && FS[target].type === 'dir') {
      cwd = target;
      cwdDisplay.textContent = getCwdDisplay() + '/';
    } else if (FS[target] && FS[target].type === 'file') {
      print(`cd: '${args[0]}' is a file, not a directory`, 'err');
    } else {
      print(`cd: '${args[0]}': No such directory`, 'err');
    }
  },

  cat(args) {
    if (!args[0]) { print('Usage: cat <filename>', 'err'); return; }
    const target = resolvePath(args[0]);
    const node = FS[target];
    if (!node)                { print(`cat: '${args[0]}': No such file`, 'err'); return; }
    if (node.type === 'dir')  { print(`cat: '${args[0]}': Is a directory. Use 'ls' instead.`, 'err'); return; }
    print('');
    print(node.content, 'info');
    print('');
  },

  clear() {
    output.innerHTML = '';
  },

  pwd() {
    print(cwd);
  },

  echo(args) {
    print(args.join(' '), 'info');
  },

  date() {
    print(new Date().toString(), 'info');
  },

  sudo(args) {
    print('');
    if (args.join(' ').includes('rm -rf') || args.join(' ').includes('rm-rf')) {
      print('  ⚠  Nice try. The filesystem trembled, then laughed.',  'accent');
      print('  ⚠  ZainOS does not negotiate with terrorists.',         'accent');
    } else {
      print('  [sudo] password for guest: ', 'accent');
      setTimeout(() => {
        print('  Sorry, this incident will be reported to Zain.', 'err');
        print('  (It won\'t. But behave yourself.)',               'dim');
      }, 700);
    }
    print('');
  },

  zain() {
    print('');
    print('  >> PERSONAL LOG DECRYPTED <<',                          'accent');
    print('');
    print('  University        : FAST-NUCES, Batch 2024',            'info');
    print('  Favourite subject : AI & Algorithms',                   'info');
    print('  Favourite language: C++ (a love-hate affair)',          'info');
    print('  Current goal      : Land a great internship',           'info');
    print('  Fun fact          : Built a terminal portfolio',        'info');
    print('                      to stand out. You found it.',       'info');
    print('');
    print('  >> END OF LOG <<', 'dim');
    print('');
  },

  matrix() { startMatrix(); },
  snake()  { startSnake();  },

  guess() {
    guessNumber   = Math.floor(Math.random() * 100) + 1;
    guessAttempts = 0;
    guessActive   = true;
    print('');
    print('  ╔═══════════════════════════════╗', 'dim');
    print('  ║    GUESS THE NUMBER (1-100)   ║', 'dim');
    print('  ╚═══════════════════════════════╝', 'dim');
    print('');
    print('  I\'m thinking of a number between 1 and 100.', 'info');
    print('  Type your guess and press ENTER.',              'info');
    print('  (Type "quit" to exit game)',                    'dim');
    print('');
  },

  resume() {
    print('');
    print('  Launching resume download...', 'accent');
    print('  (Tip: Link resume.jpeg in your project folder!)', 'dim');
    print('');
  }
};

// =====================================================================
// COMMAND RUNNER
// =====================================================================
function runCommand(cmdStr) {
  cmdStr = cmdStr.trim();
  if (!cmdStr) return;

  printCmd(cmdStr);
  history.unshift(cmdStr);
  if (history.length > 200) history.pop();
  historyIdx = -1;

  // Guess game intercept
  if (guessActive) {
    if (cmdStr.toLowerCase() === 'quit') {
      guessActive = false;
      print('  Game over. The number was ' + guessNumber + '.', 'accent');
      return;
    }
    const n = parseInt(cmdStr);
    guessAttempts++;
    if (isNaN(n))          { print(`  That's not a number. Try again.`,          'err');    }
    else if (n < guessNumber) { print(`  ↑ TOO LOW! (attempt ${guessAttempts})`, 'accent'); }
    else if (n > guessNumber) { print(`  ↓ TOO HIGH! (attempt ${guessAttempts})`,'accent'); }
    else {
      print(`  ✓ CORRECT! ${guessNumber} in ${guessAttempts} attempts!`, 'info');
      guessActive = false;
    }
    return;
  }

  const parts = cmdStr.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g) || [];
  const cmd   = parts[0].toLowerCase();
  const args  = parts.slice(1);

  if (COMMANDS[cmd]) {
    COMMANDS[cmd](args);
  } else if (cmd === 'exit' || cmd === 'logout') {
    print('');
    print('  Connection closed. Come back soon, hacker.', 'accent');
    print('');
    setTimeout(() => location.reload(), 1500);
  } else {
    print(`  zsh: command not found: ${cmd}`, 'err');
    print(`  Type 'help' to see available commands.`,    'dim');
  }
}

// =====================================================================
// INPUT HANDLER
// =====================================================================
input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const val = input.value;
    input.value = '';
    runCommand(val);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (historyIdx < history.length - 1) {
      historyIdx++;
      input.value = history[historyIdx];
    }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (historyIdx > 0) {
      historyIdx--;
      input.value = history[historyIdx];
    } else {
      historyIdx = -1;
      input.value = '';
    }
  } else if (e.key === 'Tab') {
    e.preventDefault();
    autocomplete();
  }
});

document.addEventListener('click',   () => { if (!matrixActive && !snakeActive) input.focus(); });
document.addEventListener('keydown', () => { if (!matrixActive && !snakeActive) input.focus(); });

// =====================================================================
// AUTOCOMPLETE
// =====================================================================
function autocomplete() {
  const val   = input.value;
  const parts = val.split(' ');
  const last  = parts[parts.length - 1];

  if (parts.length === 1) {
    const allCmds = Object.keys(COMMANDS).concat(['exit', 'logout', 'sudo']);
    const matches = allCmds.filter(c => c.startsWith(last));
    if (matches.length === 1)      input.value = matches[0];
    else if (matches.length > 1)   print(matches.join('  '), 'dim');
  } else {
    const node = FS[cwd];
    if (node && node.type === 'dir') {
      const matches = node.children.filter(c => c.startsWith(last));
      if (matches.length === 1) {
        parts[parts.length - 1] = matches[0];
        input.value = parts.join(' ');
      } else if (matches.length > 1) {
        print(matches.join('  '), 'dim');
      }
    }
  }
}

// =====================================================================
// MATRIX EFFECT
// =====================================================================
function startMatrix() {
  const canvas = document.getElementById('matrix-canvas');
  const hint   = document.getElementById('matrix-exit-hint');
  canvas.style.display = 'block';
  hint.style.display   = 'block';
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  matrixActive  = true;

  const ctx   = canvas.getContext('2d');
  const cols  = Math.floor(canvas.width / 16);
  const drops = Array(cols).fill(1);
  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEF<>{}[];=+';

  let animId;

  function draw() {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00FF41';
    ctx.font = '15px Fira Code';
    drops.forEach((y, i) => {
      const ch = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(ch, i * 16, y * 16);
      if (y * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
    animId = requestAnimationFrame(draw);
  }
  draw();

  function exitMatrix(e) {
    if (e.key === 'Escape') {
      cancelAnimationFrame(animId);
      canvas.style.display = 'none';
      hint.style.display   = 'none';
      matrixActive = false;
      document.removeEventListener('keydown', exitMatrix);
      input.focus();
      print('  // MATRIX DISENGAGED //', 'dim');
    }
  }
  document.addEventListener('keydown', exitMatrix);
}

// =====================================================================
// SNAKE GAME
// =====================================================================
function startSnake() {
  const container = document.getElementById('snake-container');
  const canvas    = document.getElementById('snake-canvas');
  const scoreEl   = document.getElementById('snake-score');
  container.style.display = 'flex';
  snakeActive = true;

  const ctx  = canvas.getContext('2d');
  const CELL = 20, COLS = 20, ROWS = 20;

  let snake   = [{ x: 10, y: 10 }];
  let dir     = { x: 1, y: 0 };
  let nextDir = { x: 1, y: 0 };
  let food    = spawnFood();
  let score   = 0;
  let interval;

  function spawnFood() {
    let f;
    do {
      f = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
    } while (snake.some(s => s.x === f.x && s.y === f.y));
    return f;
  }

  function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#003300';
    ctx.lineWidth   = 0.5;
    for (let x = 0; x < COLS; x++)
      for (let y = 0; y < ROWS; y++)
        ctx.strokeRect(x * CELL, y * CELL, CELL, CELL);

    snake.forEach((s, i) => {
      ctx.fillStyle = i === 0 ? '#00FF41' : '#008822';
      ctx.fillRect(s.x * CELL + 1, s.y * CELL + 1, CELL - 2, CELL - 2);
    });

    ctx.fillStyle = '#f3ac29';
    ctx.fillRect(food.x * CELL + 3, food.y * CELL + 3, CELL - 6, CELL - 6);
  }

  function step() {
    dir = nextDir;
    const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

    if (
      head.x < 0 || head.x >= COLS ||
      head.y < 0 || head.y >= ROWS ||
      snake.some(s => s.x === head.x && s.y === head.y)
    ) {
      clearInterval(interval);
      ctx.fillStyle = 'rgba(0,0,0,0.7)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle  = '#00FF41';
      ctx.textAlign  = 'center';
      ctx.font       = '28px VT323';
      ctx.fillText('GAME OVER — SCORE: ' + score, canvas.width / 2, canvas.height / 2);
      ctx.font = '18px VT323';
      ctx.fillText('Press ESC to exit', canvas.width / 2, canvas.height / 2 + 30);
      return;
    }

    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
      score++;
      scoreEl.textContent = 'SCORE: ' + score;
      food = spawnFood();
    } else {
      snake.pop();
    }
    draw();
  }

  interval = setInterval(step, 120);
  draw();

  function handleSnakeKey(e) {
    const map = {
      ArrowUp:    { x: 0, y: -1 },
      ArrowDown:  { x: 0, y:  1 },
      ArrowLeft:  { x: -1, y: 0 },
      ArrowRight: { x:  1, y: 0 }
    };
    if (map[e.key]) {
      const d = map[e.key];
      if (d.x !== -dir.x || d.y !== -dir.y) nextDir = d;
      e.preventDefault();
    }
    if (e.key === 'Escape') {
      clearInterval(interval);
      container.style.display = 'none';
      snakeActive = false;
      document.removeEventListener('keydown', handleSnakeKey);
      input.focus();
      print('  Game exited. Score: ' + score, 'dim');
    }
  }
  document.addEventListener('keydown', handleSnakeKey);
}

// =====================================================================
// CLOCK
// =====================================================================
function updateClock() {
  const el = document.getElementById('time-display');
  if (el) el.textContent = new Date().toLocaleTimeString('en-US', { hour12: false });
}
setInterval(updateClock, 1000);
updateClock();

// =====================================================================
// RANDOM CRT FLICKER
// =====================================================================
setInterval(() => {
  if (Math.random() < 0.03) {
    document.body.classList.add('flickering');
    setTimeout(() => document.body.classList.remove('flickering'), 200);
  }
}, 3000);

// =====================================================================
// BOOT SEQUENCE
// =====================================================================
const bootLines = [
  { text: '  ZainOS BIOS v2.4 — Copyright 2025 Zain Tariq', cls: 'header' },
  { text: '  CPU: Intel Core i7 @ 3.60GHz',                 cls: '' },
  { text: '  RAM: 16384MB OK',                              cls: 'ok' },
  { text: '',                                               cls: '' },
  { text: '  Checking storage integrity...',                 cls: '' },
  { text: '  /dev/sda1: CLEAN [OK]',                        cls: 'ok' },
  { text: '  /dev/sda2: CLEAN [OK]',                        cls: 'ok' },
  { text: '  /home/guest mounted',                          cls: 'ok' },
  { text: '',                                               cls: '' },
  { text: '  Loading kernel modules...',                     cls: '' },
  { text: '  [  0.123] terminal.ko loaded',                 cls: 'ok' },
  { text: '  [  0.291] filesystem.ko loaded',               cls: 'ok' },
  { text: '  [  0.458] input_handler.ko loaded',            cls: 'ok' },
  { text: '  [  0.612] crt_effects.ko loaded',              cls: 'ok' },
  { text: '  [  0.781] easteregg.ko loaded',                cls: 'warn' },
  { text: '',                                               cls: '' },
  { text: '  Mounting virtual filesystem...',                cls: '' },
  { text: '  /home/guest/about.txt           [FOUND]',      cls: 'ok' },
  { text: '  /home/guest/skills.txt          [FOUND]',      cls: 'ok' },
  { text: '  /home/guest/projects/ (6 files) [FOUND]',      cls: 'ok' },
  { text: '  /home/guest/contact.sh          [FOUND]',      cls: 'ok' },
  { text: '  /home/guest/secret.log          [REDACTED]',   cls: 'warn' },
  { text: '',                                               cls: '' },
  { text: '  Bypassing firewall...           [DONE]',       cls: 'warn' },
  { text: '  Establishing secure shell...    [DONE]',       cls: 'ok' },
  { text: '  Compiling matrix module...      [STANDBY]',    cls: 'warn' },
  { text: '',                                               cls: '' },
  { text: '  ** BOOT COMPLETE — WELCOME TO ZAINOS v1.0 **', cls: 'header' },
  { text: '',                                               cls: '' },
];

async function runBoot() {
  const container = document.getElementById('boot-lines');

  for (let i = 0; i < bootLines.length; i++) {
    await new Promise(r => setTimeout(r, 45 + Math.random() * 35));
    const div       = document.createElement('div');
    div.className   = 'boot-line ' + bootLines[i].cls;
    div.textContent = bootLines[i].text || '\u00a0';
    container.appendChild(div);
    div.style.opacity = 1;
  }

  await new Promise(r => setTimeout(r, 600));

  // Fade out boot screen
  const bootScreen = document.getElementById('boot-screen');
  bootScreen.style.transition = 'opacity 0.5s';
  bootScreen.style.opacity    = '0';
  await new Promise(r => setTimeout(r, 500));
  bootScreen.style.display = 'none';

  // Show terminal
  document.getElementById('terminal').style.display = 'flex';

  // Welcome banner
  print('');
  print('  ██████╗  █████╗ ██╗███╗   ██╗ ██████╗ ███████╗', 'dim');
  print('  ╚════██╗██╔══██╗██║████╗  ██║██╔═══██╗██╔════╝', 'dim');
  print('   █████╔╝███████║██║██╔██╗ ██║██║   ██║███████╗', 'dim');
  print('  ██╔═══╝ ██╔══██║██║██║╚██╗██║██║   ██║╚════██║', 'dim');
  print('  ███████╗██║  ██║██║██║ ╚████║╚██████╔╝███████║', 'dim');
  print('  ╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝', 'dim');
  print('');
  print("  Welcome, guest. You are connected to Zain's portfolio.", 'info');
  print('  Last login: ' + new Date().toDateString() + ' from 127.0.0.1', 'dim');
  print('');
  print("  Type 'help' to see available commands.", 'accent');
  print("  Type 'whoami' to learn about Zain.",    'accent');
  print("  Type 'ls' to explore files.",            'accent');
  print("  Type 'ls projects/' to see 6 projects.", 'accent');
  print('');

  input.focus();
  cwdDisplay.textContent = getCwdDisplay() + '/';
}

runBoot();