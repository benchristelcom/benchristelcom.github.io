const bots = `.ai
AdsBot-Google
Agentic
AhrefsBot
AI Article Writer
AI Content Detector
AI Dungeon
AI Search Engine
AI SEO Crawler
AI Training
AI Writer
AI21 Labs
AI2Bot
Ai2Bot-Dolma
AI2Bot-Dolma
AIBot
aiHitBot
AIMatrix
AISearchBot
AITraining
Alexa
Alpha AI
AlphaAI
Amazon Bedrock
Amazon Comprehend
Amazon Lex
Amazon Sagemaker
Amazon Silk
Amazon Textract
Amazon-Kendra
Amazonbot
AmazonBot
Amelia
AndersPinkBot
Anthropic
anthropic-ai
AnyPicker
Anyword
Applebot
Applebot-Extended
Aria Browse
Articoolo
Automated Writer
AwarioBot
AwarioRssBot
AwarioSmartBot
Azure
BardBot
BingBot
Brave Leo
Brightbot 1.0
ByteDance
Bytespider
CatBoost
CC-Crawler
CCBot
ChatGLM
ChatGPT-User
ChatGPT-User/2.0
Chinchilla
Claude
Claude-SearchBot
Claude-User
claude-web
Claude-Web
ClaudeBot
ClearScope
Cohere
cohere-ai
cohere-training-data-crawler
Common Crawl
CommonCrawl
Content Harmony
Content King
Content Optimizer
Content Samurai
ContentAtScale
ContentBot
Contentedge
Conversion AI
Copilot
CopyAI
Copymatic
Copyscape
Cotoyogi
CrawlQ AI
Crawlspace
Crew AI
CrewAI
DALL-E
DataForSeoBot
DataProvider
DeepAI
DeepL
DeepMind
DeepSeek
Diffbot
diffbot
Doubao AI
DuckAssistBot
FacebookBot
Facebookbot
FacebookExternalHit
Factset_spyderbot
Falcon
Firecrawl
FirecrawlAgent
Flyriver
Frase AI
FriendlyCrawler
Gemini
Gemma
GenAI
Genspark
Gigabot
GLM
Google-CloudVertexBot
Google-Extended
GoogleOther
GoogleOther-Image
GoogleOther-Video
Goose
GPT
GPTBot
Grammarly
Grendizer
Grok
GT Bot
GTBot
Hemingway Editor
Hugging Face
Hypotenuse AI
iaskspider
iaskspider/2.0
ICC-Crawler
ImageGen
ImagesiftBot
img2dataset
imgproxy
Inferkit
INK Editor
INKforall
IntelliSeek
ISSCyberRiskCrawler
JasperAI
Kafkai
Kangaroo
Kangaroo Bot
Keyword Density AI
Knowledge
KomoBot
LinkedInBot
LLaMA
LLMs
magpie-crawler
MarketMuse
Meltwater
Meta AI
Meta-AI
Meta-External
meta-externalagent
Meta-ExternalAgent
meta-externalfetcher
Meta-ExternalFetcher
MetaAI
MetaTagBot
Mistral
MistralAI-User/1.0
Narrative
NeevaBot
Neural Text
NeuralSEO
Nova Act
NovaAct
Nutch
OAI-SearchBot
Omgili
omgili
Omgilibot
omgilibot
Open AI
OpenAI
OpenBot
OpenText AI
Operator
Outwrite
Page Analyzer AI
PanguBot
Paperlibot
Paraphraser.io
peer39_crawler
Perplexity
Perplexity-User
PerplexityBot
PetalBot
Petalbot
Phindbot
PiplBot
prefetch-proxy
ProWritingAid
psbot
python-requests
QualifiedBot
QuillBot
RobotSpider
Robozilla
Rytr
SaplingAI
Scalenut
Scraper
Scrapy
ScriptBook
Seekr
SemrushBot-OCOB
SemrushBot-SWA
SentiBot
sentibot
Sentibot
SEO Content Machine
SEO Robot
Sidetrade
Sidetrade indexer bot
Simplified AI
Sitefinity
Skydancer
SlickWrite
Sonic
Spin Rewriter
Spinbot
Stability
StableDiffusionBot
Sudowrite
Super Agent
Surfer AI
Teoma
Text Blaze
TextCortex
The Knowledge AI
TikTokSpider
TimpiBot
Timpibot
TurnitinBot
VelenPublicWebCrawler
Vidnami AI
Webzio
Webzio-Extended
webzio-extended
Whisper
WordAI
Wordtune
WormsGTP
wpbot
WPBot
Writecream
WriterZen
Writescope
Writesonic
xAI
xBot
YouBot
Youbot
Zero GTP
Zerochat
Zhipu
Zimm`.split(/\n/).filter(Boolean)

const rng = seedRandom()

function seedRandom(a = 0x96293ae4, b = 0x31415926, c = 0x1bc2af5e, d = 0x16181dd3) {
    return function rng() {
        a |= 0; b |= 0; c |= 0; d |= 0
        var t = (a + b | 0) + d | 0
        d = d + 1 | 0
        a = b ^ b >>> 9
        b = c + (c << 3) | 0
        c = c << 21 | c >>> 11
        c = c + t | 0
        return (t >>> 0) / 4294967296
    }
}

class MarkovModel {
    transitions = {}

    learn(text) {
        const tokens = ["", ...text.split(/\s+/).filter(Boolean), ""]
        for (let i = 0; i < tokens.length - 1; i++) {
            this.learnOne(
                tokens.slice(i, i + 1).join(" "),
                tokens[i + 1],
            )
        }
    }

    learnOne(antecedent, consequent) {
        this.transitions[antecedent] ||= []
        this.transitions[antecedent].push(consequent)
    }

    predictNext(antecedent) {
        const possibilities = this.transitions[antecedent]
        if (possibilities == null) {
            return ""
        }
        return pickRandom(possibilities)
    }

    generate() {
        return new MarkovGenerator(this)
    }
}

class MarkovGenerator {
    constructor(model) {
        this.model = model
    }

    text() {
        const tokens = [""]
        while (tokens.length < 1000) {
            const last = tokens[tokens.length - 1]
            const next = this.model.predictNext(last)
            if (next === "") {
                break;
            }
            tokens.push(next)
        }
        return tokens.join(" ")
    }
}

function pickRandom(array) {
    return array[Math.floor(rng() * array.length)]
}

function *eachTextNode(node) {
    if (node instanceof HTMLStyleElement) {
        return
    }
    if (node instanceof Text) {
        yield node
    } else if (node instanceof Element) {
        for (const child of node.childNodes) {
            yield *eachTextNode(child)
        }
    }
}

function knossify(rootNode) {
    for (const textNode of eachTextNode(rootNode)) {
        const model = new MarkovModel()
        model.learn(textNode.textContent)
        textNode.textContent = model.generate().text()
    }
}

function isBot() {
    return bots.some((bot) => navigator.userAgent.includes(bot))
}

window.addEventListener("load", () => {
    if (isBot() || window.location.hash === "#knossify") {
        knossify(document.body)
    }
})
