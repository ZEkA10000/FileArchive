//META{"name":"SmileOPack"}*//
$Twilight_Images_max = 1062
class SmileOPack {
    // Constructor
    constructor() {
        this.initialized = false;
        console.log("heello wooOOoOooorld!")
    }

    // Meta
    getName() { return "SmileOPack"; }
    getShortName() { return "SmileOPack"; }
    getDescription() { return "Send MLP emojis from Smile-O-Pack."; }
    getVersion() { return "0.1.0"; }
    getAuthor() { return "ZEkA10000"; }

    // Settings  Panel
    getSettingsPanel() {
        return "<!--Enter Settings Panel Options, just standard HTML-->";
    }
    
    // Load/Unload
    start() {
       var style = document.createElement('style');
        style.innerHTML = `
        .smile_o_pack_category {
            width:32px;
            height:32px;
            background-color: transparent;
            background-size: contain;
        }
        .smile_o_pack_item {
            float:left; 
            width: 40px;
            height: 40px;
            margin: 3px;
            background-color: transparent;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }
        `;
        document.head.appendChild(style);
        
	}
    // navButton-1XuvI- navItem-3McpmW                        button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F
    // navButton-1XuvI- navItem-3McpmW navButtonActive-1EqC5l button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F
    observer(e) {
        //console.log(e)
        if (e.addedNodes[0] != undefined) {
            if (e.addedNodes[0].className == "drawerSizingWrapper-1txdWG") {
                var smileButton = document.createElement("button");
                smileButton.setAttribute("role", "tab");
                smileButton.id = "smile_o_pack_picker";
                smileButton.setAttribute("aria-selected", "false");
                smileButton.setAttribute("type", "button");
                smileButton.className = "navButton-1XuvI- navItem-3McpmW button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F";
                smileButton.innerHTML = `<div class="contents-3ca1mk">Smile-O-Pack</div></button>`
                smileButton.onclick = () => {
                    try { document.getElementById("sticker-picker-tab-panel").remove() } catch {}
                    try { document.getElementById("emoji-picker-tab-panel").remove() } catch {}
                    try { document.getElementById("gif-picker-tab-panel").remove() } catch {}

                    document.getElementsByClassName("contentWrapper-3vHNP2")[0].innerHTML += `
                        <div style="width:100%; height: 5px; background-color:#2F3136; filter: drop-shadow(0px 4px 2px #0004);margin-top: 4px;"> </div>
                            <div style="display:flex; justify-content:center; height: 380px;">
                                <div class="wrapper-22rqw6 categoryList-2qRrlj" style="float:left">
                                    <div class="scroller-2MALzE list-obNEuP none-2-_0dP scrollerBase-_bVAAt" dir="ltr" style="overflow: hidden scroll; padding-right: 0px;">
                                        <div role="list" id="smile_o_pack_categories" class="listItems-6eZzQ1" style="inset: 8px 8px 0px;">
                                        </div>
                                    </div>
                                </div>
                                <div id="emoji_container" class="scroller-2MALzE list-3V14yy thin-31rlnD scrollerBase-_bVAAt" dir="ltr" style="overflow: hidden scroll; width: 376px; margin-left: 48px;">
                            </div>
                        </div>
                    `
                    // ===============================================================================================
                    // TWILIGHT SPARKLE
                    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv

                    var _button = document.createElement("button")
                    _button.className = "smile_o_pack_category"
                    _button.style.backgroundImage = "url(https://raw.githubusercontent.com/ZEkA10000/FileArchive/main/TS/1033.png)"
                    _button.onclick = () => {
                        for (var i = 1; i <= $Twilight_Images_max; i++) {
                            var __button = document.createElement("button");
                            __button.style.backgroundImage = "url(\"https://raw.githubusercontent.com/ZEkA10000/FileArchive/main/TS/" + i + ".png\")"
                            __button.className = "smile_o_pack_item";
                            __button.onclick = () => {
                                var source = "https://raw.githubusercontent.com/ZEkA10000/FileArchive/main/TS/" + i + ".png"
                                document.getElementsByClassName("markup-eYLPri editor-H2NA06 slateTextArea-27tjG0 fontSize16Padding-XoMpjI")[0].innerText = source;
                                document.getElementsByClassName("markup-eYLPri editor-H2NA06 slateTextArea-27tjG0 fontSize16Padding-XoMpjI")[0].innerHTML = `
                                <div data-slate-node="element">
                                    <span data-slate-node="text">
                                        <span data-slate-leaf="true" class="">
                                            <span data-slate-string="true">`
                                            +
                                             source
                                            +
                                           `</span>
                                        </span>
                                    </span>
                                    <br>
                                </div>
                                `
                                
                            }
                            document.getElementById("emoji_container").appendChild(__button)
                        }
                    }
                    document.getElementById("smile_o_pack_categories").appendChild(_button)

                  /*# ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                    # TWILIGHT SPARKLE
                    # ===============================================================================================
                    # // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
                    # / // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
                    # ===============================================================================================
                    #
                    # vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv*/


                    for (var i = 0; i < document.getElementsByClassName("navList-YSb9UB")[0].getElementsByTagName("button").length; i++) {
                        document.getElementsByClassName("navList-YSb9UB")[0].getElementsByTagName("button")[i].className = "navButton-1XuvI- navItem-3McpmW button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F"

                        if (document.getElementsByClassName("navList-YSb9UB")[0].getElementsByTagName("button")[i].id != "smile_o_pack_picker")
                            console.log(document.getElementsByClassName("navList-YSb9UB")[0].getElementsByTagName("button")[i])
                            document.getElementsByClassName("navList-YSb9UB")[0].getElementsByTagName("button")[i].onclick = () => {
                                document.getElementsByClassName("emojiButton-3FRTuj")[0].click()
                                document.getElementsByClassName("emojiButton-3FRTuj")[0].click()
                            }
                            
                        document.getElementsByClassName("navList-YSb9UB")[0].getElementsByTagName("button")[i].setAttribute("aria-selected", "false");
                        console.log(document.getElementsByClassName("navList-YSb9UB")[0].getElementsByTagName("button")[i].onclick)
                    }
                    document.getElementById("smile_o_pack_picker").className = "navButton-1XuvI- navItem-3McpmW navButtonActive-1EqC5l button-f2h6uQ lookBlank-21BCro colorBrand-I6CyqQ grow-2sR_-F"

                }
                document.getElementsByClassName("navList-YSb9UB")[0].appendChild(smileButton)
            }
        }
    }
    
    stop() { }

    // Events
    onMessage() {
        
    };
}

function summonEmojiWindow() {
    emojiWindow = document.createElement("div")
    emojiWindow.setAttribute("id", "smile_o_pack_window")   
    document.getElementsByClassName("layerContainer-2v_Sit")[0].appendChild(emojiWindow)
}
