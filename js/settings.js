/* *************************** *\
Code is poetry.
iam [at] johnho.ca
\* *************************** */

/* Settings *\
\*==========*/
var settings = {
    "links_path" : "links.txt",
    
    "title" : "Bridgeview Living",
    //\_ Page's title: enter your personal mantra

    "navigation": {
	"newWindow": true,
	//\_ open links and search results in new tab?
	"menu_auto_close": false
	//\_ close links dropdown menu after a link is clicked?
    },

    "fonts":{
	"body": "Clear Sans",//"Calibri",
	"links": "Trebuchet MS", //"Helvetica"
	"toUpper": false
	//\_ should links and search engine label be all uppercase?
    },
    
    "icons": {
	"showIcons": false
    },

    "clock": {
	"IsMilitary": false
    },

    "weather": {
	"show": true,
	"geolocate": false,
	"default_loco": "Philadelphia, Pennsylvania"
    },
    
    "background": {
	"source":{
	    "baseUrl": "",
	    "dayColId":"http://goldwallpapers.com/uploads/posts/philadelphia-skyline-wallpaper/philadelphia_skyline_wallpaper_027.jpg",
	    "nightColId":"https://s-media-cache-ak0.pinimg.com/originals/47/d9/4b/47d94b87b7da7d27ae8b8cd67c2d7cfc.jpg",
	    "dawnColId": "http://www.wallpaperup.com/uploads/wallpapers/2013/01/29/32028/big_thumb_79d29b007ca8298c6886b7b6274500c1.jpg",
	    "duskColId": "http://eskipaper.com/images/philadelphia-4.jpg"
	},
	"daily": false
	//\_ should background picture in each collection be only updated once per day?
    },
	
    "search": {
	"engines": [// format is [search url, search varible name (different for each site), label to be shown]
		    ["http://google.com/search", "q","GOOGLE"],
		    ["http://images.google.com/search", "q","GImg"],
		    ["http://google.com/maps", "q", "GMap"],
		    ["http://google.com/news", "q", "GNews"],
		    ["http://youtube.com/results", "search_query", "YouTube"],
		    ["http://soundcloud.com/search/sounds", "q", "SoundCloud"],
		    ["http://bing.com/search", "q", "Bing"],
		    ["http://github.com/search", "q", "GitHub"],
		    ["http://duckduckgo.com/", "q", "DuckDuckGo"],
		    ["http://wolframalpha.com/input/", "i", "WolframAlpha"]
		    ],
	"focusSearch": true,
	//\_ should the search box be selected on load?
	"showQuotes": true,
	"quotes":[
		  "What you seek is seeking you. ~ Rumi",
		  "This Universe is not outside of you. Look inside yourself; everything that you want, you already are. ~ Rumi",
		  //"You are not a drop in the ocean. You are the entire ocean in a drop. ~ Rumi",
		  "the Universe is in us. ~ Neil DeGrasse Tyson",
		  "What you seek you already are. ~ Deepak Chopra",
		  "All that you seek is already within you. ~ Ram Dass",
		  "Look within! The secret is inside you. ~ Hui Neng",
		  "Everything is within. Everything exists. Seek nothing outside of yourself. ~ Miyamoto Musashi",
		  "Search within... for honest self-expression. ~ Bruce Lee",
		  "Peace comes from within. Do not seek it without. ~ Buddha"
		  ]
    }
};
