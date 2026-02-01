const translations = {
    en: {
        "title": "Xu Jun",
        "description": "Xu Jun",
        "link1-text": "About me and more",
        "link1-desc": "Introduction about my personality and hobbies.",
        "link2-text": "My Blog",
        "link2-desc": "My things.",
        "link3-text": "Hot Minecraft Briefs Tool",
        "link3-desc": "Tool to make handsome guys wear only briefs.",
        "link4-text": "PlanetMinecraft",
        "link4-desc": "Where I put Minecraft related things.",
        "link5-text": "YouTube Channel",
        "link5-desc": "A random channel.",
        "link6-text": "Twitter (X)",
        "link6-desc": "NSFW/Gay content warning.",
        "link7-text": "GitHub",
        "link7-desc": "My shitty code is here.",
        "link8-text": "Reddit",
        "link8-desc": "Just for hobbies.",
        "footer-copyright": "© 2025 XuJun's LinkTree Style Trash Box",
        "footer-icp": "Ji-IDP No.12052008 Rainbow Web Shu No.20081205 Operator: Xu Jun",
        "footer-address": "77 Sanba-ban, Zhongshan District, Dalian, Liaoning, PRC"
    },
    ja: {
        "title": "徐 军",
        "description": "徐 军",
        "link1-text": "俺の自己紹介と色々",
        "link1-desc": "俺の性格や趣味などを紹介しています。",
        "link2-text": "俺のブログ",
        "link2-desc": "俺のなにか。",
        "link3-text": "激エロ???マイクラパンイチツール",
        "link3-desc": "イケメンをパンイチにするツール",
        "link4-text": "PlanetMinecraft",
        "link4-desc": "マイクラ関連のものを置いてる。",
        "link5-text": "YouTube チャンネル",
        "link5-desc": "適当なチャンネル。",
        "link6-text": "Twitter (X)",
        "link6-desc": "ゲイゲイしてるしエロいから閲覧注意。",
        "link7-text": "GitHub",
        "link7-desc": "うんコードはこちらに。",
        "link8-text": "Reddit",
        "link8-desc": "ただの趣味でつかってる。",
        "footer-copyright": "© 2025 しゅーさんのLinkTree風のごみ箱",
        "footer-icp": "基IDP备12052008号 彩虹网帅备20081205号 运营者：徐军",
        "footer-address": "中华人民共和国辽宁省大连市中山区三八番七七街"
    },
    zh: {
        "title": "徐 军",
        "description": "徐 军",
        "link1-text": "关于我以及各种",
        "link1-desc": "介绍我的性格和爱好等。",
        "link2-text": "我的博客",
        "link2-desc": "我的一些动态。",
        "link3-text": "激H??? 我的世界内裤工具",
        "link3-desc": "把帅哥变成只穿内裤的工具。",
        "link4-text": "PlanetMinecraft",
        "link4-desc": "存放我的世界相关内容的地方。",
        "link5-text": "YouTube 频道",
        "link5-desc": "随便弄的频道。",
        "link6-text": "Twitter (X)",
        "link6-desc": "同性行为内容及色情预警。",
        "link7-text": "GitHub",
        "link7-desc": "我的垃圾代码都在这里。",
        "link8-text": "Reddit",
        "link8-desc": "仅仅用于个人爱好。",
        "footer-copyright": "© 2025 徐军的 LinkTree 风垃圾桶",
        "footer-icp": "基IDP备12052008号 彩虹网帅备20081205号 运营者：徐军",
        "footer-address": "中华人民共和国辽宁省大连市中山区三八番七七街"
    }
};

function updateLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translations[lang][key];
        if (translation) {
            const attr = el.getAttribute('data-i18n-attr');
            if (attr) {
                el.setAttribute(attr, translation);
            } else {
                el.textContent = translation;
            }
        }
    });
    localStorage.setItem('preferred-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang-select');
    const savedLang = localStorage.getItem('preferred-lang') || (navigator.language.startsWith('zh') ? 'zh' : navigator.language.startsWith('ja') ? 'ja' : 'en');

    langSelect.value = translations[savedLang] ? savedLang : 'en';
    updateLanguage(langSelect.value);

    langSelect.addEventListener('change', (e) => {
        updateLanguage(e.target.value);
    });

    const bg = document.getElementById('bg-animation');
    for (let i = 0; i < 15; i++) {
        const c = document.createElement('div');
        c.className = 'circle';
        const size = Math.random() * 50 + 10 + 'px';
        c.style.width = size;
        c.style.height = size;
        c.style.left = Math.random() * 100 + '%';
        c.style.animationDuration = Math.random() * 10 + 5 + 's';
        c.style.animationDelay = Math.random() * 5 + 's';
        c.style.opacity = Math.random() * 0.5;
        bg.appendChild(c);
    }
});
