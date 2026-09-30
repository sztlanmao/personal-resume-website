/* ================================================================
   script.js — 苏梓婷 / Su Ziting · 个人自我介绍求职网站
   功能：语言切换(i18n) · 滚动动画 · 阅读进度条 · 导航栏状态
        · 移动端菜单 · 六段式自我介绍演讲稿(5语言) · 一键复制
   ================================================================ */

/* ---------------- UI 文案多语言词典 (i18n) ---------------- */
const I18N = {
  zh: {
    'nav.logo': '苏梓婷',
    'nav.about': '方向',
    'nav.skills': '技能',
    'nav.projects': '项目',
    'nav.campus': '校园',
    'nav.contact': '联系',
    'nav.script': '演讲稿',
    'hero.greeting': '你好，我是',
    'hero.school': '广西外国语学院',
    'hero.major': '计算机科学与技术',
    'hero.graduation': '2027年6月毕业',
    'hero.tagline': '软件测试方向 · 追求品质与细节',
    'hero.ctaProjects': '查看项目',
    'hero.ctaContact': '联系方式',
    'hero.scroll': '向下滚动',
    'about.title': '专业方向与兴趣',
    'about.subtitle': '为什么选择软件测试',
    'about.direction': '专业方向',
    'about.directionText': '软件测试工程师 — 专注功能测试、接口测试与数据库测试，具备完整的测试流程能力',
    'about.why': '为什么热爱',
    'about.whyText': '享受找问题的过程，喜欢抠细节、追根因。耐心细致是我的性格底色，也是测试工作的天然优势',
    'about.advantage': '独特优势',
    'about.advantageText': '懂开发——能读Vue3组件和微信小程序代码，定位渲染、缓存、路由类缺陷更快，与开发沟通更高效',
    'skills.title': '专业技术技能',
    'skills.subtitle': '从测试设计到工具链的完整能力栈',
    'skills.funcTest': '功能测试',
    'skills.funcTestDesc': '熟悉需求分析→用例设计→执行→缺陷跟踪→回归→总结全流程',
    'skills.apiTest': '接口/数据库测试',
    'skills.apiTestDesc': '理解RESTful API与HTTP/HTTPS协议，熟练使用Postman与MySQL',
    'skills.webTest': 'Web与小程序测试',
    'skills.webTestDesc': '熟悉Vue3与微信小程序开发原理，擅长定位渲染、缓存、路由跳转类缺陷',
    'skills.tools': '编程与工具',
    'skills.toolsDesc': 'Python（计算机二级），熟练使用测试与开发工具链',
    'skills.courses': '主修课程',
    'skills.course1': '数据库原理',
    'skills.course2': '数据结构',
    'skills.course3': '计算机网络',
    'skills.course4': '操作系统',
    'skills.course5': 'Vue.js 3',
    'skills.course6': '微信小程序开发',
    'projects.title': '项目与实践经历',
    'projects.subtitle': '真实测试项目，覆盖功能、接口、兼容性全链路',
    'projects.p1.date': '2025.10 — 2025.12',
    'projects.p1.title': 'SpringBoot+Vue3 前后端分离电商购物系统',
    'projects.p1.subtitle': '功能与接口测试',
    'projects.p1.role': '测试工程师',
    'projects.p1.desc': '设计功能用例60余条；Postman测试10余个RESTful接口，提交缺陷3个；多表联查SQL发现外键约束缺失导致脏数据1处',
    'projects.p1.achievement': '核心用例通过率100%',
    'projects.p2.date': '2025.11 — 2025.12',
    'projects.p2.title': '微信云开发校园失物招领小程序',
    'projects.p2.subtitle': '功能遍历与兼容性测试',
    'projects.p2.role': '测试工程师',
    'projects.p2.desc': '7个页面60余个检查点功能遍历；设计弱网、授权拒绝、分页边界异常用例；复现"本地缓存与云端收藏状态不一致"缺陷；完成多机型兼容性测试',
    'projects.p2.achievement': '发现并复现缓存一致性缺陷，完成兼容性测试',
    'projects.p3.date': '2025.10 — 2025.11',
    'projects.p3.title': 'Vue3+Pinia 学生信息管理系统',
    'projects.p3.subtitle': '前端专项测试',
    'projects.p3.role': '测试工程师',
    'projects.p3.desc': '学生CRUD、动态路由传参、表单校验执行用例；验证Pinia持久化状态一致性；对空数据、超长输入、特殊字符边界用错误推测法测试',
    'projects.p3.achievement': '前端专项测试覆盖全面',
    'campus.title': '校园经历与软技能',
    'campus.subtitle': '学业表现与组织能力',
    'campus.awardsTitle': '荣誉奖项',
    'campus.award1': '国家励志奖学金',
    'campus.award2': '中国-东盟AI安全攻防大赛全区第八名',
    'campus.award3': '筑梦奖学金 · 校级三好学生',
    'campus.award4': '校级奖学金',
    'campus.award5': '优秀共青团员',
    'campus.rankingLabel': '专业排名前',
    'campus.rankingDetail': '31 / 354',
    'campus.rolesTitle': '校园职务',
    'campus.role1': '技术竞赛部部长',
    'campus.role1Desc': '学院团委学生会 — 策划代码表白大赛、电脑义务维修等活动',
    'campus.role2': '班级学习委员',
    'campus.role2Desc': '大三至大四 — 负责考勤统计、教务传达与资料分发',
    'campus.softSkill1': '团队协作 — 能独立完成全栈项目，也能与团队高效沟通',
    'campus.softSkill2': '快速学习 — 掌握多种技术栈，适应快速变化的技术环境',
    'campus.softSkill3': '责任心强 — 耐心细致，意向长期从事软件测试方向',
    'contact.title': '求职目标与联系方式',
    'contact.subtitle': '期待加入您的团队',
    'contact.target': '目标职位',
    'contact.position': '软件测试工程师（校招/实习）',
    'contact.willingness': '愿意学习与成长，具备测试思维，善于挖掘边界与异常场景',
    'contact.location': '广西梧州',
    'contact.ctaText': '感谢您的阅读！欢迎随时联系，期待与您进一步交流。',
    'contact.ctaBtn': '欢迎联系！',
    'script.title': '自我介绍演讲稿',
    'script.subtitle': '3分钟英文自我介绍 · 6段式框架 · 5语言版本',
    'script.copyBtn': '复制演讲稿',
    'script.copied': '已复制！',
    'footer.info': '广西外国语学院 · 计算机科学与技术 · 2027届'
  },

  en: {
    'nav.logo': 'Su Ziting',
    'nav.about': 'Direction',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.campus': 'Campus',
    'nav.contact': 'Contact',
    'nav.script': 'Speech',
    'hero.greeting': "Hello, I'm",
    'hero.school': 'Guangxi University of Foreign Languages',
    'hero.major': 'Computer Science & Technology',
    'hero.graduation': 'Graduating June 2027',
    'hero.tagline': 'Software Testing · Quality & Detail Oriented',
    'hero.ctaProjects': 'View Projects',
    'hero.ctaContact': 'Contact Me',
    'hero.scroll': 'Scroll down',
    'about.title': 'Major & Interest',
    'about.subtitle': 'Why I chose software testing',
    'about.direction': 'Professional Direction',
    'about.directionText': 'Software Test Engineer — focused on functional, API and database testing, with full testing-process capability',
    'about.why': 'Why I love it',
    'about.whyText': 'I enjoy finding problems and tracing root causes. Patience and attention to detail are my nature — and natural advantages for testing.',
    'about.advantage': 'Unique Advantage',
    'about.advantageText': 'I understand development — I can read Vue3 components and WeChat Mini Program code, locate rendering/cache/routing defects faster, and communicate with developers more efficiently.',
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'A complete stack from test design to toolchains',
    'skills.funcTest': 'Functional Testing',
    'skills.funcTestDesc': 'Full flow: requirement analysis → case design → execution → defect tracking → regression → summary',
    'skills.apiTest': 'API & Database Testing',
    'skills.apiTestDesc': 'Understand RESTful APIs and HTTP/HTTPS; skilled in Postman and MySQL',
    'skills.webTest': 'Web & Mini Program Testing',
    'skills.webTestDesc': 'Familiar with Vue3 and WeChat Mini Program; good at locating rendering, cache and routing defects',
    'skills.tools': 'Programming & Tools',
    'skills.toolsDesc': 'Python (NCRE Level 2); proficient in testing & development toolchains',
    'skills.courses': 'Core Courses',
    'skills.course1': 'Database Principles',
    'skills.course2': 'Data Structures',
    'skills.course3': 'Computer Networks',
    'skills.course4': 'Operating Systems',
    'skills.course5': 'Vue.js 3',
    'skills.course6': 'WeChat Mini Program',
    'projects.title': 'Projects & Practice',
    'projects.subtitle': 'Real testing projects covering functional, API and compatibility chains',
    'projects.p1.date': '2025.10 — 2025.12',
    'projects.p1.title': 'SpringBoot+Vue3 E-commerce System',
    'projects.p1.subtitle': 'Functional & API Testing',
    'projects.p1.role': 'Test Engineer',
    'projects.p1.desc': 'Designed 60+ functional cases; tested 10+ RESTful APIs with Postman, submitted 3 defects; multi-table SQL found 1 dirty-data issue from a missing foreign-key constraint',
    'projects.p1.achievement': '100% pass rate on core cases',
    'projects.p2.date': '2025.11 — 2025.12',
    'projects.p2.title': 'WeChat Lost & Found Mini Program',
    'projects.p2.subtitle': 'Functional Traversal & Compatibility',
    'projects.p2.role': 'Test Engineer',
    'projects.p2.desc': 'Traversed 7 pages / 60+ checkpoints; designed weak-network, denied-auth, paging-boundary cases; reproduced the "local cache vs cloud favorite inconsistency" defect; completed multi-device compatibility testing',
    'projects.p2.achievement': 'Reproduced cache-consistency defect & completed compatibility testing',
    'projects.p3.date': '2025.10 — 2025.11',
    'projects.p3.title': 'Vue3+Pinia Student Info System',
    'projects.p3.subtitle': 'Front-End Testing',
    'projects.p3.role': 'Test Engineer',
    'projects.p3.desc': 'Tested CRUD, dynamic-route params, form validation; verified Pinia persistence consistency; used error-guessing on empty data, over-length input and special characters',
    'projects.p3.achievement': 'Comprehensive front-end test coverage',
    'campus.title': 'Campus & Soft Skills',
    'campus.subtitle': 'Academic performance & organization',
    'campus.awardsTitle': 'Awards & Honors',
    'campus.award1': 'National Inspirational Scholarship',
    'campus.award2': 'China-ASEAN AI Security Contest · 8th in Region',
    'campus.award3': 'Dream-Building Scholarship · Model Student',
    'campus.award4': 'University Scholarship',
    'campus.award5': 'Outstanding League Member',
    'campus.rankingLabel': 'Top',
    'campus.rankingDetail': '31 / 354 in major',
    'campus.rolesTitle': 'Campus Roles',
    'campus.role1': 'Director, Tech Competition Dept.',
    'campus.role1Desc': 'Student Union — organized code confession contest, free computer maintenance & more',
    'campus.role2': 'Class Study Monitor',
    'campus.role2Desc': 'Year 3–4 — attendance stats, academic notices, materials distribution',
    'campus.softSkill1': 'Teamwork — can build full-stack projects independently, yet communicates efficiently in a team',
    'campus.softSkill2': 'Fast Learning — masters multiple tech stacks, adapts to fast-changing environments',
    'campus.softSkill3': 'Responsible — patient & detail-oriented, committed to a long-term career in software testing',
    'contact.title': 'Goal & Contact',
    'contact.subtitle': 'Looking forward to joining your team',
    'contact.target': 'Target Position',
    'contact.position': 'Software Test Engineer (Campus / Intern)',
    'contact.willingness': 'Willing to learn and grow; testing mindset; good at digging into boundaries and abnormal scenarios',
    'contact.location': 'Wuzhou, Guangxi',
    'contact.ctaText': 'Thank you for reading! Feel free to contact me anytime.',
    'contact.ctaBtn': 'Contact Me!',
    'script.title': 'Self-Introduction Speech',
    'script.subtitle': '3-minute English self-intro · 6-part framework · 5 languages',
    'script.copyBtn': 'Copy Speech',
    'script.copied': 'Copied!',
    'footer.info': 'Guangxi University of Foreign Languages · CS&Tech · Class of 2027'
  },

  th: {
    'nav.logo': 'ซู จื่อถิง',
    'nav.about': 'ทิศทาง',
    'nav.skills': 'ทักษะ',
    'nav.projects': 'โปรเจกต์',
    'nav.campus': 'มหาวิทยาลัย',
    'nav.contact': 'ติดต่อ',
    'nav.script': 'สุนทรพจน์',
    'hero.greeting': 'สวัสดี ฉันคือ',
    'hero.school': 'มหาวิทยาลัยภาษาต่างประเทศกว่างซี',
    'hero.major': 'วิทยาการคอมพิวเตอร์และเทคโนโลยี',
    'hero.graduation': 'จบ มิ.ย. 2027',
    'hero.tagline': 'ซอฟต์แวร์เทสติ้ง · เน้นคุณภาพและรายละเอียด',
    'hero.ctaProjects': 'ดูโปรเจกต์',
    'hero.ctaContact': 'ติดต่อฉัน',
    'hero.scroll': 'เลื่อนลง',
    'about.title': 'สาขาและความสนใจ',
    'about.subtitle': 'ทำไมฉันเลือกซอฟต์แวร์เทสติ้ง',
    'about.direction': 'ทิศทางวิชาชีพ',
    'about.directionText': 'วิศวกรทดสอบซอฟต์แวร์ — มุ่งเน้นเทสติ้งเชิงฟังก์ชัน, API และฐานข้อมูล พร้อมความสามารถครบวงจร',
    'about.why': 'ทำไมฉันรักมัน',
    'about.whyText': 'ฉันสนุกกับการค้นหาปัญหาและไล่หาสาเหตุ ความอดทนและความละเอียดเป็นนิสัยของฉัน ซึ่งเป็นข้อดีของงานเทสติ้ง',
    'about.advantage': 'ข้อได้เปรียบพิเศษ',
    'about.advantageText': 'ฉันเข้าใจการพัฒนา — อ่านโค้ด Vue3 และมินิโปรแกรมได้ ค้นหาข้อบกพร่องด้านการเรนเดอร์/แคช/รูทได้เร็ว และสื่อสารกับนักพัฒนาได้ดีขึ้น',
    'skills.title': 'ทักษะทางเทคนิค',
    'skills.subtitle': 'สแตกครบตั้งแต่การออกแบบเทสต์ถึงเครื่องมือ',
    'skills.funcTest': 'Functional Testing',
    'skills.funcTestDesc': 'รู้ขั้นตอนเต็ม: วิเคราะห์ความต้องการ→ออกแบบเคส→ปฏิบัติ→ติดตามบั๊ก→regression→สรุป',
    'skills.apiTest': 'API & Database Testing',
    'skills.apiTestDesc': 'เข้าใจ RESTful API และ HTTP/HTTPS; ใช้ Postman และ MySQL ได้คล่อง',
    'skills.webTest': 'Web & Mini Program Testing',
    'skills.webTestDesc': 'คุ้นเคยกับ Vue3 และ WeChat Mini Program; เก่งการหาบั๊กด้านเรนเดอร์, แคช, รูท',
    'skills.tools': 'การเขียนโปรแกรมและเครื่องมือ',
    'skills.toolsDesc': 'Python (NCRE ระดับ 2); ใช้เครื่องมือเทสติ้งและพัฒนาได้คล่อง',
    'skills.courses': 'วิชาหลัก',
    'skills.course1': 'Database Principles',
    'skills.course2': 'Data Structures',
    'skills.course3': 'Computer Networks',
    'skills.course4': 'Operating Systems',
    'skills.course5': 'Vue.js 3',
    'skills.course6': 'WeChat Mini Program',
    'projects.title': 'โปรเจกต์และประสบการณ์',
    'projects.subtitle': 'โปรเจกต์เทสติ้งจริง ครอบคลุมฟังก์ชัน, API และความเข้ากันได้',
    'projects.p1.date': '2025.10 — 2025.12',
    'projects.p1.title': 'ระบบอีคอมเมิร์ซ SpringBoot+Vue3',
    'projects.p1.subtitle': 'Functional & API Testing',
    'projects.p1.role': 'Test Engineer',
    'projects.p1.desc': 'ออกแบบเคส 60+; ทดสอบ API 10+ ด้วย Postman, พบบั๊ก 3; SQL พบข้อมูลสกปรก 1 จุดจาก FK หาย',
    'projects.p1.achievement': 'อัตราผ่านเคสหลัก 100%',
    'projects.p2.date': '2025.11 — 2025.12',
    'projects.p2.title': 'WeChat Mini Program ตามของหาย',
    'projects.p2.subtitle': 'Functional Traversal & Compatibility',
    'projects.p2.role': 'Test Engineer',
    'projects.p2.desc': 'สำรวจ 7 หน้า / 60+ จุด; ออกแบบเคสเครือข่ายอ่อน, ปฏิเสธสิทธิ์, ขอบหน้าเพจ; จำลองบั๊กแคช; ทดสอบหลายเครื่อง',
    'projects.p2.achievement': 'จำลองบั๊กความสอดคล้องแคชและทดสอบความเข้ากันได้',
    'projects.p3.date': '2025.10 — 2025.11',
    'projects.p3.title': 'ระบบข้อมูลนักเรียน Vue3+Pinia',
    'projects.p3.subtitle': 'Front-End Testing',
    'projects.p3.role': 'Test Engineer',
    'projects.p3.desc': 'ทดสอบ CRUD, พารามิเตอร์รูท, การตรวจสอบฟอร์ม; ตรวจสอบ Persistence ของ Pinia; ทดสอบขอบข้อมูล',
    'projects.p3.achievement': 'ครอบคลุมเทสต์ Front-End อย่างครบถ้วน',
    'campus.title': 'มหาวิทยาลัยและ Soft Skills',
    'campus.subtitle': 'ผลการเรียนและองค์กร',
    'campus.awardsTitle': 'รางวัลและเกียรติยศ',
    'campus.award1': 'ทุนจูงใจแห่งชาติ',
    'campus.award2': 'ประกวด AI Security จีน-อาเซียน · อันดับ 8',
    'campus.award3': 'ทุน Dream-Building · นักเรียนดีเด่น',
    'campus.award4': 'ทุนมหาวิทยาลัย',
    'campus.award5': 'สมาชิกเยาวชนดีเด่น',
    'campus.rankingLabel': 'Top',
    'campus.rankingDetail': '31 / 354 ในสาขา',
    'campus.rolesTitle': 'บทบาทในมหาวิทยาลัย',
    'campus.role1': 'หัวหน้าแผนกแข่งขันเทค',
    'campus.role1Desc': 'สภานักศึกษา — จัดงานประกวดโค้ด, ซ่อมคอมพิวเตอร์ฟรี และอื่นๆ',
    'campus.role2': 'ผู้แทนฝ่ายเรียนของห้อง',
    'campus.role2Desc': 'ปี 3–4 — สถิติการเข้าเรียน, แจ้งข่าววิชาการ, แจกเอกสาร',
    'campus.softSkill1': 'ทำงานเป็นทีม — ทำโปรเจกต์ full-stack ได้เอง และสื่อสารเป็นทีมอย่างมีประสิทธิภาพ',
    'campus.softSkill2': 'เรียนรู้เร็ว — ใช้หลาย tech stack ปรับตัวเข้ากับสภาพแวดล้อมที่เปลี่ยนเร็ว',
    'campus.softSkill3': 'รับผิดชอบ — อดทนและละเอียด มุ่งมั่นกับงานเทสติ้งระยะยาว',
    'contact.title': 'เป้าหมายและติดต่อ',
    'contact.subtitle': 'หวังว่าจะได้ร่วมทีมของคุณ',
    'contact.target': 'ตำแหน่งเป้าหมาย',
    'contact.position': 'Software Test Engineer (Campus / Intern)',
    'contact.willingness': 'เต็มใจเรียนรู้และเติบโต มีกรอบคิดแบบเทสติ้ง เก่งขุดขอบและสถานการณ์ผิดปกติ',
    'contact.location': 'อู๋โจว, กว่างซี',
    'contact.ctaText': 'ขอบคุณที่อ่าน! ติดต่อฉันได้ทุกเมื่อ',
    'contact.ctaBtn': 'ติดต่อฉัน!',
    'script.title': 'สุนทรพจน์แนะนำตัว',
    'script.subtitle': 'แนะนำตัวภาษาอังกฤษ 3 นาที · โครงสร้าง 6 ส่วน · 5 ภาษา',
    'script.copyBtn': 'คัดลอกสุนทรพจน์',
    'script.copied': 'คัดลอกแล้ว!',
    'footer.info': 'มหาวิทยาลัยภาษาต่างประเทศกว่างซี · CS&Tech · รุ่น 2027'
  },

  ko: {
    'nav.logo': '쑤쯔팅',
    'nav.about': '방향',
    'nav.skills': '기술',
    'nav.projects': '프로젝트',
    'nav.campus': '학교',
    'nav.contact': '연락처',
    'nav.script': '연설문',
    'hero.greeting': '안녕하세요, 저는',
    'hero.school': '광시외국어대학',
    'hero.major': '컴퓨터과학 및 기술',
    'hero.graduation': '2027년 6월 졸업',
    'hero.tagline': '소프트웨어 테스팅 · 품질과 디테일 추구',
    'hero.ctaProjects': '프로젝트 보기',
    'hero.ctaContact': '연락처',
    'hero.scroll': '스크롤',
    'about.title': '전공과 관심',
    'about.subtitle': '소프트웨어 테스팅을 선택한 이유',
    'about.direction': '전문 방향',
    'about.directionText': '소프트웨어 테스트 엔지니어 — 기능/API/DB 테스팅에 집중하며 완전한 테스트 프로세스 역량 보유',
    'about.why': '왜 좋아하나',
    'about.whyText': '문제를 찾고 근본 원인을 추적하는 것을 즐깁니다. 인내와 세심함이 제 성격이며 테스팅의 자연스러운 강점입니다.',
    'about.advantage': '차별적 강점',
    'about.advantageText': '개발을 이해합니다 — Vue3 컴포넌트와 미니프로그램 코드를 읽어 렌더링/캐시/라우팅 결함을 더 빨리 찾고 개발자와 더 효율적으로 소통합니다.',
    'skills.title': '전문 기술',
    'skills.subtitle': '테스트 설계부터 도구까지 완전한 스택',
    'skills.funcTest': '기능 테스트',
    'skills.funcTestDesc': '요구분석→케이스 설계→실행→결함 추적→회귀→요약 전체 프로세스 숙지',
    'skills.apiTest': 'API & DB 테스트',
    'skills.apiTestDesc': 'RESTful API와 HTTP/HTTPS 이해; Postman과 MySQL 능숙',
    'skills.webTest': 'Web & 미니프로그램 테스트',
    'skills.webTestDesc': 'Vue3와 WeChat 미니프로그램 이해; 렌더링/캐시/라우팅 결함 탐지에 강함',
    'skills.tools': '프로그래밍과 도구',
    'skills.toolsDesc': 'Python (NCRE 2급); 테스팅 및 개발 도구 능숙',
    'skills.courses': '주요 과목',
    'skills.course1': '데이터베이스 원리',
    'skills.course2': '자료구조',
    'skills.course3': '컴퓨터 네트워크',
    'skills.course4': '운영체제',
    'skills.course5': 'Vue.js 3',
    'skills.course6': 'WeChat 미니프로그램',
    'projects.title': '프로젝트와 경험',
    'projects.subtitle': '기능, API, 호환성 전 과정을 아우르는 실제 테스트 프로젝트',
    'projects.p1.date': '2025.10 — 2025.12',
    'projects.p1.title': 'SpringBoot+Vue3 전자상거래 시스템',
    'projects.p1.subtitle': '기능 & API 테스트',
    'projects.p1.role': '테스트 엔지니어',
    'projects.p1.desc': '케이스 60+ 설계; Postman으로 API 10+ 테스트, 결함 3건; FK 누락으로 인한 오염 데이터 1건 발견',
    'projects.p1.achievement': '핵심 케이스 통과율 100%',
    'projects.p2.date': '2025.11 — 2025.12',
    'projects.p2.title': 'WeChat 분실물 미니프로그램',
    'projects.p2.subtitle': '기능 탐색 & 호환성',
    'projects.p2.role': '테스트 엔지니어',
    'projects.p2.desc': '7개 페이지/60+ 체크포인트; 약한 네트워크, 권한 거부, 페이지 경계 케이스; 캐시 불일치 결함 재현; 다기기 호환 테스트',
    'projects.p2.achievement': '캐시 일관성 결함 재현 및 호환 테스트 완료',
    'projects.p3.date': '2025.10 — 2025.11',
    'projects.p3.title': 'Vue3+Pinia 학생정보 시스템',
    'projects.p3.subtitle': '프론트엔드 테스트',
    'projects.p3.role': '테스트 엔지니어',
    'projects.p3.desc': 'CRUD, 동적 라우팅 파라미터, 폼 검증 테스트; Pinia 영속성 일관성 검증; 경계 데이터 오류추측 테스트',
    'projects.p3.achievement': '포괄적 프론트엔드 테스트',
    'campus.title': '학교와 소프트스킬',
    'campus.subtitle': '학업 성과와 조직 능력',
    'campus.awardsTitle': '수상 및 영예',
    'campus.award1': '국가 장려 장학금',
    'campus.award2': '중국-ASEAN AI 보안 대회 지역 8위',
    'campus.award3': '드림빌딩 장학금 · 우수 학생',
    'campus.award4': '교내 장학금',
    'campus.award5': '우수 청년단원',
    'campus.rankingLabel': '상위',
    'campus.rankingDetail': '전공 31 / 354',
    'campus.rolesTitle': '학교 직책',
    'campus.role1': '기술경진부 부장',
    'campus.role1Desc': '학생회 — 코드 고백 대회, 무료 컴퓨터 수리 등 주최',
    'campus.role2': '반 학습위원',
    'campus.role2Desc': '3~4학년 — 출석 통계, 학사 공지, 자료 배포',
    'campus.softSkill1': '팀워크 — 풀스택 프로젝트를 독립 수행하면서도 팀과 효율적으로 소통',
    'campus.softSkill2': '빠른 학습 — 다양한 기술 스택 구사, 빠르게 변하는 환경에 적응',
    'campus.softSkill3': '책임감 — 인내심 있고 세심하며 테스팅 분야 장기 종사 의지',
    'contact.title': '목표와 연락처',
    'contact.subtitle': '함께하고 싶습니다',
    'contact.target': '목표 직무',
    'contact.position': '소프트웨어 테스트 엔지니어 (채용/인턴)',
    'contact.willingness': '배우고 성장할 의지; 테스트 사고와 경계 탐색 능력 보유',
    'contact.location': '광시 우저우',
    'contact.ctaText': '읽어주셔서 감사합니다! 언제든 연락 주세요.',
    'contact.ctaBtn': '연락 주세요!',
    'script.title': '자기소개 연설문',
    'script.subtitle': '3분 영어 자기소개 · 6부분 구조 · 5개 언어',
    'script.copyBtn': '연설문 복사',
    'script.copied': '복사됨!',
    'footer.info': '광시외국어대학 · CS&Tech · 2027학번'
  },

  ja: {
    'nav.logo': 'ス・ズーティン',
    'nav.about': '方向性',
    'nav.skills': 'スキル',
    'nav.projects': 'プロジェクト',
    'nav.campus': 'キャンパス',
    'nav.contact': '連絡先',
    'nav.script': 'スピーチ',
    'hero.greeting': 'こんにちは、私は',
    'hero.school': '広西外国語学院',
    'hero.major': 'コンピュータ科学技術',
    'hero.graduation': '2027年6月卒業',
    'hero.tagline': 'ソフトウェアテスト · 品質と細部へのこだわり',
    'hero.ctaProjects': 'プロジェクトを見る',
    'hero.ctaContact': '連絡先',
    'hero.scroll': 'スクロール',
    'about.title': '専攻と関心',
    'about.subtitle': 'ソフトウェアテストを選んだ理由',
    'about.direction': '専門方向',
    'about.directionText': 'ソフトウェアテストエンジニア — 機能・API・DBテストに注力し、完全なテストプロセス能力を備える',
    'about.why': 'なぜ好きか',
    'about.whyText': '問題を見つけ根本原因を追究するのが好き。忍耐と細やかさは私の素質であり、テストの強みです。',
    'about.advantage': '独自の強み',
    'about.advantageText': '開発が分かる——Vue3コンポーネントやミニプログラムのコードを読み、レンダリング・キャッシュ・ルーティング欠陥を素早く特定し、開発者と効率的に連携。',
    'skills.title': '専門技術スキル',
    'skills.subtitle': 'テスト設計からツールチェーンまでの完全なスタック',
    'skills.funcTest': '機能テスト',
    'skills.funcTestDesc': '要件分析→ケース設計→実行→欠陥追跡→回帰→総括の全工程を熟知',
    'skills.apiTest': 'API & DBテスト',
    'skills.apiTestDesc': 'RESTful APIとHTTP/HTTPSを理解; PostmanとMySQLを熟練',
    'skills.webTest': 'Web & ミニプログラムテスト',
    'skills.webTestDesc': 'Vue3と微信ミニプログラムを熟知し、レンダリング・キャッシュ・ルーティング欠陥の発見に強み',
    'skills.tools': 'プログラミングとツール',
    'skills.toolsDesc': 'Python（NCRE2級）; テスト・開発ツールチェーンを熟練',
    'skills.courses': '主要科目',
    'skills.course1': 'データベース原理',
    'skills.course2': 'データ構造',
    'skills.course3': 'コンピュータネットワーク',
    'skills.course4': 'オペレーティングシステム',
    'skills.course5': 'Vue.js 3',
    'skills.course6': '微信ミニプログラム',
    'projects.title': 'プロジェクトと経験',
    'projects.subtitle': '機能・API・互換性を網羅する実テストプロジェクト',
    'projects.p1.date': '2025.10 — 2025.12',
    'projects.p1.title': 'SpringBoot+Vue3 ECサイト',
    'projects.p1.subtitle': '機能 & APIテスト',
    'projects.p1.role': 'テストエンジニア',
    'projects.p1.desc': 'ケース60以上設計; PostmanでAPI10以上をテスト、欠陥3件; FK欠落による汚染データ1件をSQLで発見',
    'projects.p1.achievement': '主要ケース合格率100%',
    'projects.p2.date': '2025.11 — 2025.12',
    'projects.p2.title': '微信落とし物ミニプログラム',
    'projects.p2.subtitle': '機能探索 & 互換性',
    'projects.p2.role': 'テストエンジニア',
    'projects.p2.desc': '7ページ/60以上チェックポイント; 弱い通信・権限拒否・ページ境界ケース; キャッシュ不一致欠陥を再現; 複数端末互換テスト',
    'projects.p2.achievement': 'キャッシュ整合性欠陥を再現し互換テスト完了',
    'projects.p3.date': '2025.10 — 2025.11',
    'projects.p3.title': 'Vue3+Pinia 学生情報システム',
    'projects.p3.subtitle': 'フロントエンドテスト',
    'projects.p3.role': 'テストエンジニア',
    'projects.p3.desc': 'CRUD、動的ルーティング、フォーム検証をテスト; Pinia永続化の一貫性を検証; 境界データを誤り推測法でテスト',
    'projects.p3.achievement': '包括的なフロントエンドテスト',
    'campus.title': 'キャンパスとソフトスキル',
    'campus.subtitle': '学業成績と組織能力',
    'campus.awardsTitle': '受賞歴',
    'campus.award1': '国家励志奨学金',
    'campus.award2': '中国-ASEAN AIセキュリティ大会 地区8位',
    'campus.award3': '筑梦奨学金 · 優秀学生',
    'campus.award4': '校内奨学金',
    'campus.award5': '優秀共青団員',
    'campus.rankingLabel': '上位',
    'campus.rankingDetail': '専攻 31 / 354',
    'campus.rolesTitle': 'キャンパス役職',
    'campus.role1': '技術競技部部長',
    'campus.role1Desc': '学生会 — コード告白大会、無料PC修理などを主催',
    'campus.role2': 'クラス学習委員',
    'campus.role2Desc': '3〜4年 — 出席統計、学務連絡、資料配布',
    'campus.softSkill1': 'チームワーク — フルスタックを単独で完成しつつ、チームと効率的に連携',
    'campus.softSkill2': '速習力 — 多様な技術スタックを駆使し、変化の速い環境に適応',
    'campus.softSkill3': '責任感 — 忍耐強く細やかで、テスト分野での長期キャリアを志向',
    'contact.title': '目標と連絡先',
    'contact.subtitle': 'ご一緒できるのを楽しみにしています',
    'contact.target': '目標職種',
    'contact.position': 'ソフトウェアテストエンジニア（新卒/インターン）',
    'contact.willingness': '学び成長する意欲; テスト思考を持ち、境界や異常シナリオを掘り起こすのが得意',
    'contact.location': '広西梧州',
    'contact.ctaText': 'お読みいただきありがとうございます！お気軽にご連絡ください。',
    'contact.ctaBtn': 'ご連絡ください！',
    'script.title': '自己紹介スピーチ',
    'script.subtitle': '3分間英語自己紹介 · 6段構成 · 5言語版',
    'script.copyBtn': 'スピーチをコピー',
    'script.copied': 'コピーしました！',
    'footer.info': '広西外国語学院 · CS&Tech · 2027年度卒'
  }
};

/* ---------------- 六段式自我介绍演讲稿 (5语言) ----------------
   框架（依课程讲义）：
   ① Basic Info 打招呼+基本信息（姓名/学校/专业/毕业时间）
   ② Major & Interest 专业方向与兴趣
   ③ Tech Skills 专业技术技能
   ④ Projects & Internships ★核心，占8-10句
   ⑤ Campus & Soft Skills 校园经历与软技能
   ⑥ Goal & Closing 求职目标与收尾 Thank you
   建议时长3分钟 ≈ 25-30句
--------------------------------------------------------------- */
const SCRIPTS = {
  en: [
    { title: '① Basic Info — Greeting & Background', text:
`Hello everyone, my name is Su Ziting. You can also call me Suziting.
I am a senior undergraduate student majoring in Computer Science and Technology at Guangxi University of Foreign Languages, and I will graduate in June 2027.
I am here today to apply for the position of Software Test Engineer.` },
    { title: '② Major & Interest', text:
`I chose software testing because I love finding problems and tracing their root causes.
I pay great attention to details, and I am patient and careful by nature.
To me, testing is not just clicking around — it is about verifying quality and protecting the user experience.
This passion keeps me learning and improving my testing skills.` },
    { title: '③ Tech Skills', text:
`In terms of skills, I am familiar with the whole testing process, from requirement analysis and test-case design to execution, defect tracking, regression, and summary.
I design test cases using equivalence partitioning, boundary value analysis, scenario-based methods, and error guessing.
I understand RESTful APIs and the HTTP/HTTPS protocol, and I am skilled at using Postman for API testing and MySQL for database verification.
I also understand Vue3 and WeChat Mini Program development, which helps me locate front-end defects faster.` },
    { title: '④ Projects & Internships (Core)', text:
`For projects, I completed three software-testing tasks as an independent developer and test lead.
First, an e-commerce system built with Spring Boot and Vue3. I designed more than 60 functional test cases for the login, search, and shopping-cart modules.
I tested over 10 RESTful interfaces with Postman and found three defects, such as unescaped special characters and unvalidated negative quantities.
I also wrote multi-table SQL queries to verify data consistency and found one dirty-data issue caused by a missing foreign-key constraint. The core test-case pass rate reached 100 percent.
Second, a WeChat Mini Program for lost-and-found on campus. I performed functional traversal on seven pages with more than 60 checkpoints, validated cloud functions like getOpenid and publishItem, and designed abnormal cases such as weak networks and denied authorization.
I reproduced a cache-consistency defect and completed compatibility testing on multiple devices.
Third, a student information management system based on Vue3 and Pinia, where I focused on front-end testing, including CRUD operations, dynamic routing, form validation, and state persistence.` },
    { title: '⑤ Campus & Soft Skills', text:
`Beyond projects, I served as the director of the technology competition department in the student union, where I planned events such as a code confession contest and free computer maintenance, serving more than one hundred teachers and students.
I am also the class study monitor, handling attendance statistics and academic notices.
These experiences strengthened my coordination and communication skills, and I enjoy working in a team.` },
    { title: '⑥ Goal & Closing', text:
`For my career goal, I want to grow into a professional software test engineer and keep learning new tools and methods.
I am willing to work hard, take responsibility, and contribute to the team.
Thank you for listening, and I hope to have the chance to join your team.` }
  ],

  zh: [
    { title: '① 基本信息 — 打招呼与背景', text:
`各位好，我是苏梓婷，你也可以叫我 Suziting。
我是广西外国语学院计算机科学与技术专业的本科大四学生，将于2027年6月毕业。
今天我来应聘软件测试工程师（校招/实习）这个岗位。` },
    { title: '② 专业方向与兴趣', text:
`我选择软件测试，是因为我享受找问题的过程，也喜欢追根因。
我做事注重细节，性格耐心细致，这正好是测试工作的天然优势。
对我来说，测试不只是点点点，而是验证质量、守护用户体验。
这份热爱，也推动我持续学习和精进测试技能。` },
    { title: '③ 专业技术技能', text:
`在技能方面，我熟悉完整的测试流程：需求分析、用例设计、执行、缺陷跟踪、回归到总结。
我运用等价类、边界值、场景法和错误推测法设计用例。
我理解 RESTful API 和 HTTP/HTTPS 协议，熟练使用 Postman 做接口测试、MySQL 做数据库校验。
我也熟悉 Vue3 和微信小程序开发原理，能更快定位前端类缺陷。` },
    { title: '④ 项目与实习（核心）', text:
`在项目上，我以独立开发者兼测试负责人的身份，完成了三个软件测试任务。
第一，SpringBoot+Vue3 前后端分离电商购物系统。我为登录、搜索、购物车模块设计了60多条功能用例。
我用 Postman 测试了10多个 RESTful 接口，发现了特殊字符未转义、数量传负数未校验等3个缺陷。
我还编写多表联查 SQL 校验数据一致性，发现1处因外键约束缺失导致的脏数据问题，并推动修复；核心用例通过率达到100%。
第二，微信云开发校园失物招领小程序。我对7个页面、60多个检查点做了功能遍历，校验了 getOpenid、publishItem 等云函数，设计了弱网、拒绝授权等异常用例。
我复现了"本地缓存与云端收藏状态不一致"的缺陷，并完成多机型兼容性测试。
第三，基于 Vue3+Pinia 的学生信息管理系统，我专注前端专项测试，覆盖增删改查、动态路由传参、表单校验和状态持久化。` },
    { title: '⑤ 校园经历与软技能', text:
`在项目之外，我担任学院团委学生会技术竞赛部部长，策划了代码表白大赛、电脑义务维修等活动，累计服务师生百余人。
我同时担任班级学习委员，负责考勤统计与教务传达。
这些经历锻炼了我的协调与沟通能力，我也非常享受团队协作。` },
    { title: '⑥ 求职目标与收尾', text:
`我的职业目标是成长为一名专业的软件测试工程师，持续学习新的工具与方法。
我愿意努力工作、承担责任，为团队贡献价值。
感谢各位聆听，期待有机会加入您的团队。` }
  ],

  th: [
    { title: '① ข้อมูลพื้นฐาน — การทักทายและภูมิหลัง', text:
`สวัสดีทุกคน ผม/ฉันชื่อซู จื่อถิง คุณเรียกฉันว่าซูจื่อถิงก็ได้
ฉันเป็นนักศึกษาชั้นปีสุดท้าย สาขาวิทยาการคอมพิวเตอร์และเทคโนโลยี มหาวิทยาลัยภาษาต่างประเทศกว่างซี และจะสำเร็จการศึกษามิถุนายน 2027
วันนี้ฉันมาสมัครตำแหน่งวิศวกรทดสอบซอฟต์แวร์` },
    { title: '② สาขาและความสนใจ', text:
`ฉันเลือกซอฟต์แวร์เทสติ้งเพราะฉันชอบค้นหาปัญหาและไล่หาสาเหตุที่แท้จริง
ฉันใส่ใจรายละเอียด อดทนและละเอียดรอบคอบ ซึ่งเป็นข้อดีโดยธรรมชาติของงานเทสติ้ง
สำหรับฉัน การเทสต์ไม่ใช่แค่การคลิก แต่คือการตรวจสอบคุณภาพและปกป้องประสบการณ์ผู้ใช้
ความรักนี้ทำให้ฉันเรียนรู้และพัฒนาทักษะเทสติ้งอยู่เสมอ` },
    { title: '③ ทักษะทางเทคนิค', text:
`ด้านทักษะ ฉันคุ้นเคยกับกระบวนการเทสต์ทั้งหมด ตั้งแต่การวิเคราะห์ความต้องการ ออกแบบเคส ปฏิบัติ ติดตามบั๊ก ถึง regression และสรุป
ฉันออกแบบเคสด้วย equivalence partitioning, boundary value, scenario และ error guessing
ฉันเข้าใจ RESTful API และ HTTP/HTTPS และใช้ Postman สำหรับเทสต์ API กับ MySQL สำหรับตรวจฐานข้อมูลอย่างคล่องแคล่ว
ฉันยังเข้าใจ Vue3 และการพัฒนา WeChat Mini Program ซึ่งช่วยหาข้อบกพร่องฝั่ง Front-End ได้เร็วขึ้น` },
    { title: '④ โปรเจกต์และฝึกงาน (หัวใจสำคัญ)', text:
`ด้านโปรเจกต์ ฉันทำงานทดสอบซอฟต์แวร์สามชิ้นในฐานะนักพัฒนาและหัวหน้าทีมเทสต์
หนึ่ง ระบบอีคอมเมิร์ซที่สร้างด้วย Spring Boot และ Vue3 ฉันออกแบบเคสฟังก์ชันมากกว่า 60 เคสสำหรับโมดูลล็อกอิน ค้นหา และตะกร้า
ฉันทดสอบ RESTful interface มากกว่า 10 ด้วย Postman และพบ 3 ข้อบกพร่อง เช่น ตัวอักษรพิเศษไม่ถูก escape และจำนวนติดลบไม่ถูกตรวจสอบ
ฉันยังเขียน SQL แบบ multi-table เพื่อตรวจสอบความสอดคล้องข้อมูล และพบปัญหาข้อมูลสกปรก 1 จุดจาก foreign key ที่หายไป อัตราผ่านเคสหลักถึง 100%
สอง WeChat Mini Program ตามของหายในมหาวิทยาลัย ฉันสำรวจ 7 หน้า มากกว่า 60 จุดตรวจ ตรวจสอบ cloud function เช่น getOpenid, publishItem และออกแบบเคสผิดปกติ เช่น เครือข่ายอ่อน การปฏิเสธสิทธิ์
ฉันจำลองข้อบกพร่อง "ความไม่สอดคล้องของแคชในเครื่องกับที่เก็บบนคลาวด์" และทดสอบความเข้ากันได้หลายเครื่อง
สาม ระบบข้อมูลนักเรียนบน Vue3+Pinia ฉันเน้นเทสต์ Front-End ครอบคลุม CRUD การส่งพารามิเตอร์ route แบบฟอร์ม และ state persistence` },
    { title: '⑤ มหาวิทยาลัยและ Soft Skills', text:
`นอกเหนือจากโปรเจกต์ ฉันเป็นหัวหน้าแผนกแข่งขันเทคในสภานักศึกษา จัดกิจกรรม เช่น การประกวดโค้ด คำสารภาพ และซ่อมคอมพิวเตอร์ฟรี ให้บริการครูและนักศึกษากว่าร้อยคน
ฉันยังเป็นผู้แทนฝ่ายเรียน ดูแลสถิติการเข้าเรียนและการแจ้งข่าววิชาการ
ประสบการณ์เหล่านี้เสริมทักษะการประสานงานและการสื่อสาร และฉันสนุกกับการทำงานเป็นทีม` },
    { title: '⑥ เป้าหมายและปิดท้าย', text:
`เป้าหมายอาชีพของฉันคือเติบโตเป็นวิศวกรทดสอบซอฟต์แวร์มืออาชีพ และเรียนรู้เครื่องมือและวิธีใหม่ ๆ อย่างต่อเนื่อง
ฉันเต็มใจทำงานหนัก รับผิดชอบ และมีส่วนร่วมกับทีม
ขอบคุณที่ฟัง และหวังว่าจะได้มีโอกาสร่วมทีมของคุณ` }
  ],

  ko: [
    { title: '① 기본 정보 — 인사와 배경', text:
`안녕하세요, 저는 쑤쯔팅입니다. 저를 수쯔팅이라고 불러도 됩니다.
저는 광시외국어대학 컴퓨터과학 및 기술 전공 4학년이며 2027년 6월에 졸업합니다.
오늘 저는 소프트웨어 테스트 엔지니어(채용/인턴) 직무에 지원했습니다.` },
    { title: '② 전공과 관심', text:
`제가 소프트웨어 테스팅을 선택한 이유는 문제를 찾고 근본 원인을 추적하는 것을 좋아하기 때문입니다.
저는 세부사항에 주의를 기울이고 성격이 인내심 있고 꼼꼼합니다. 이는 테스팅의 자연스러운 강점입니다.
저에게 테스트는 단순히 클릭하는 것이 아니라 품질을 검증하고 사용자 경험을 지키는 것입니다.
이러한 열정이 지속적으로 학습하고 테스트 스킬을 향상시키게 합니다.` },
    { title: '③ 전문 기술', text:
`스킬 측면에서 저는 요구분석, 케이스 설계, 실행, 결함 추적, 회귀, 요약까지 전체 테스트 프로세스에 익숙합니다.
등가 분할, 경계값 분석, 시나리오 기반, 오류 추측법으로 테스트 케이스를 설계합니다.
RESTful API와 HTTP/HTTPS 프로토콜을 이해하며 Postman으로 API 테스트, MySQL로 데이터베이스 검증을 능숙하게 합니다.
또한 Vue3와 WeChat 미니프로그램 개발을 이해하여 프론트엔드 결함을 더 빨리 찾습니다.` },
    { title: '④ 프로젝트와 인턴십 (핵심)', text:
`프로젝트에서는 독립 개발자이자 테스트 책임자로 세 가지 소프트웨어 테스트 작업을 완료했습니다.
첫째, Spring Boot와 Vue3로 만든 전자상거래 시스템입니다. 로그인, 검색, 장바구니 모듈에 대해 60개 이상의 기능 케이스를 설계했습니다.
Postman으로 RESTful 인터페이스 10여 개를 테스트해 특수문자 미이스케이프, 음수 수량 미검증 등 결함 3건을 발견했습니다.
또한 다중 테이블 SQL로 데이터 일관성을 검증해 외래키 누락으로 인한 오염 데이터 1건을 발견하고 수정을 이끌었습니다. 핵심 케이스 통과율은 100%였습니다.
둘째, 캠퍼스 분실물 WeChat 미니프로그램입니다. 7개 페이지, 60개 이상 체크포인트를 기능 탐색하고 getOpenid, publishItem 등 클라우드 함수를 검증했으며 약한 네트워크, 권한 거부 등의 이상 케이스를 설계했습니다.
'로컬 캐시와 클라우드 즐겨찾기 상태 불일치' 결함을 재현하고 다기기 호환 테스트를 완료했습니다.
셋째, Vue3+Pinia 기반 학생 정보 시스템으로 프론트엔드 테스트에 집중해 CRUD, 동적 라우팅 파라미터, 폼 검증, 상태 영속성을 검증했습니다.` },
    { title: '⑤ 학교와 소프트스킬', text:
`프로젝트 외에도 학생회 기술경진부 부장을 맡아 코드 고백 대회, 무료 컴퓨터 수리 등 행사를 기획하며 교사와 학생 100여 명에게 서비스를 제공했습니다.
또한 반 학습위원으로 출석 통계와 학사 공지를 담당했습니다.
이 경험들은 조정 및 소통 능력을 키웠고 저는 팀워크를 즐깁니다.` },
    { title: '⑥ 목표와 마무리', text:
`제 직업 목표는 전문 소프트웨어 테스트 엔지니어로 성장하고 새로운 도구와 방법을 지속적으로 배우는 것입니다.
열심히 일하고 책임지며 팀에 기여할 의지가 있습니다.
들어주셔서 감사합니다. 여러분의 팀에 합류할 기회를 갖기를 바랍니다.` }
  ],

  ja: [
    { title: '① 基本情報 — 挨拶と背景', text:
`皆さん、こんにちは。私はス・ズーティンです。ズーティンと呼んでください。
私は広西外国語学院のコンピュータ科学技術専攻の4年生で、2027年6月に卒業します。
本日はソフトウェアテストエンジニア（新卒/インターン）のポジションに応募しました。` },
    { title: '② 専攻と関心', text:
`ソフトウェアテスティングを選んだのは、問題を見つけ、根本原因を追究することが好きだからです。
私は細部に注意を払い、性格は忍耐強く几帳面です。これはテスティングの自然な強みです。
私にとってテストとは単なるクリックではなく、品質を検証しユーザー体験を守ることです。
この情熱が、継続的な学習とスキル向上へと駆り立てます。` },
    { title: '③ 専門技術スキル', text:
`スキル面では、要件分析、ケース設計、実行、欠陥追跡、回帰、総括までの全テストプロセスに精通しています。
等価クラス分割、境界値分析、シナリオ法、誤り推測法でテストケースを設計します。
RESTful APIとHTTP/HTTPSプロトコルを理解し、PostmanによるAPIテストとMySQLによるデータベース検証を得意とします。
またVue3と微信ミニプログラムの開発を理解し、フロントエンド欠陥をより速く特定できます。` },
    { title: '④ プロジェクトとインターン（核心）', text:
`プロジェクトでは、独立開発者兼テスト責任者として3つのソフトウェアテスト業務を完了しました。
1つ目、Spring BootとVue3で構築したECサイト。ログイン、検索、カートの各モジュールに60以上の機能ケースを設計しました。
PostmanでRESTfulインターフェース10以上をテストし、特殊文字の未エスケープ、負数の数量未検証など欠陥3件を発見しました。
また多テーブルSQLでデータ一貫性を検証し、外部キー欠落による汚染データ1件を発見して修正を主導しました。主要ケース合格率は100%でした。
2つ目、キャンパス落とし物の微信ミニプログラム。7ページ・60以上のチェックポイントを機能探索し、getOpenid、publishItemなどのクラウド関数を検証し、弱い通信・権限拒否などの異常ケースを設計しました。
「ローカルキャッシュとクラウドの保存状態の不一致」欠陥を再現し、複数端末の互換テストを完了しました。
3つ目、Vue3+Piniaの学生情報システムで、フロントエンドテストに集中しCRUD、動的ルーティング、フォーム検証、状態永続化を検証しました。` },
    { title: '⑤ キャンパスとソフトスキル', text:
`プロジェクト以外では、学生自治会の技術競技部部長を務め、コード告白大会や無料PC修理などのイベントを企画し、100人以上の教職員・学生にサービスを提供しました。
またクラス学習委員として出席統計と学務連絡を担当しました。
これらの経験は調整力とコミュニケーション力を育て、私はチームワークを楽しんでいます。` },
    { title: '⑥ 目標と締めくくり', text:
`私のキャリア目標は、プロのソフトウェアテストエンジニアへ成長し、新しいツールや手法を学び続けることです。
一生懸命働き、責任を持ち、チームに貢献する意欲があります。
お聞きいただきありがとうございました。皆さんのチームに加わる機会をいただけることを願っています。` }
  ]
};

/* ---------------- DOM 工具 ---------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

let currentLang = localStorage.getItem('suziting-lang') || 'zh';
const STORAGE_KEY = 'suziting-lang';

/* ---------------- 语言切换 ---------------- */
function applyLanguage(lang) {
  document.body.classList.add('lang-transitioning');
  currentLang = lang;
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}

  const dict = I18N[lang] || I18N.zh;
  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  // 更新语言按钮高亮
  $$('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // 演讲稿 tab 高亮
  const scriptLang = lang === 'th' || lang === 'ko' || lang === 'ja' ? lang : (lang === 'en' ? 'en' : 'zh');
  renderScript(scriptLang);
  $$('.script-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-script-lang') === scriptLang);
  });

  setTimeout(() => document.body.classList.remove('lang-transitioning'), 300);
}

/* ---------------- 演讲稿渲染 ---------------- */
function renderScript(lang) {
  const container = $('#scriptContent');
  if (!container) return;
  const blocks = SCRIPTS[lang] || SCRIPTS.en;
  container.innerHTML = blocks.map((block, i) => `
    <div class="script-block">
      <div class="script-block-header">
        <span class="script-block-num ${i === 3 ? 'script-block-num--core' : ''}">${i + 1}</span>
        <span class="script-block-title">${block.title}</span>
      </div>
      <div class="script-block-text">${block.text}</div>
    </div>
  `).join('');
}

/* ---------------- 交互初始化 ---------------- */
function initLanguageSwitcher() {
  $$('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });
}

function initScriptTabs() {
  $$('.script-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const lang = tab.getAttribute('data-script-lang');
      $$('.script-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderScript(lang);
    });
  });
}

function initCopyButton() {
  const btn = $('#copyScriptBtn');
  const feedback = $('#copyFeedback');
  if (!btn) return;
  btn.addEventListener('click', () => {
    // 复制当前展示语言的演讲稿
    const activeTab = $('.script-tab.active');
    const lang = activeTab ? activeTab.getAttribute('data-script-lang') : 'zh';
    const blocks = SCRIPTS[lang] || SCRIPTS.zh;
    const text = blocks.map(b => b.title + '\n\n' + b.text).join('\n\n---\n\n');
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
    } catch (e) {}
    document.body.removeChild(textarea);
    if (feedback) {
      feedback.classList.add('show');
      setTimeout(() => feedback.classList.remove('show'), 1800);
    }
  });
}

function initReveal() {
  const els = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

function initScrollEffects() {
  const navbar = $('#navbar');
  const progress = $('#scrollProgress');
  const onScroll = () => {
    const y = window.scrollY;
    if (navbar) navbar.classList.toggle('scrolled', y > 40);
    if (progress) {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (total > 0 ? (y / total) * 100 : 0) + '%';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileNav() {
  const toggle = $('#navToggle');
  const links = $('#navLinks');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });
  $$('.nav-link', links).forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });
}

/* ---------------- 启动 ---------------- */
function init() {
  applyLanguage(currentLang);
  initLanguageSwitcher();
  initScriptTabs();
  initCopyButton();
  initReveal();
  initScrollEffects();
  initMobileNav();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
