        var codeMenuDiv;
        var uicodeMenuDiv;
        var uiMenuDiv;
        var aksPageMenuDiv
        var langconfigmenu = require("./../../../layarepublic/lang/extension.js").Lang.menu;
        doOnLoad()

        function doOnLoad()
        {
            if(codeMenuDiv){
                return
            }
            codeMenuDiv = new dhtmlXMenuObject(
            {
                parent: "codeMenuList"
            });
            codeMenuDiv.loadStruct(`
<?xml version="1.0"?>
<menu>
    <item id="file" text="${codeMain.getMenuListLang(1)}">
     <item id="createlayapro" text="${codeMain.getMenuListLang(2)}">
        </item>
        <item id="workbench.action.files.newUntitledFile" text="${codeMain.getMenuListLang(3)}">
            <hotkey>${ctrlreplacecmd}+N</hotkey>
        </item>
        <item id="workbench.action.newWindow" text="${codeMain.getMenuListLang(4)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+N</hotkey>
        </item>
        <item type="separator" />
        <item id="workbench.action.openProLaya" text="${codeMain.getMenuListLang(5)}"> </item>
        <item id="vscode_openFile" text="${codeMain.getMenuListLang(6)}"> </item>
        <item id="vscode_openFolder" text="${codeMain.getMenuListLang(7)}"> </item>
        <item id="workbench.action.openRecent" text="${codeMain.getMenuListLang(8)}">
            <item id="workbench.action.reopenClosedEditor" text="${codeMain.getMenuListLang(9)}">
                <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+T</hotkey>
            </item>
            <item type="separator" />
            <item type="separator" />
            <item id="workbench.action.clearEditorHistory" text="${codeMain.getMenuListLang(10)}"></item>
        </item>
        <item type="separator" />
        <item id="workbench.action.files.save" text="${codeMain.getMenuListLang(11)}">
            <hotkey>${ctrlreplacecmd}+S</hotkey>
        </item>
        <item id="workbench.action.files.saveAs" text="${codeMain.getMenuListLang(12)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+S</hotkey>
        </item>
        <item type="separator" />
        <item id="workbench.action.files.saveAll" text="${codeMain.getMenuListLang(13)}" />
        <item type="separator" />
        <item id="perfernences" text="${codeMain.getMenuListLang(173)}">
            <item id="workbench.action.openWorkspaceSettings" text="${codeMain.getMenuListLang(14)}"></item>
            <item type="separator" />
            <item id="workbench.action.openGlobalKeybindings" text="${codeMain.getMenuListLang(15)}"></item>
            <item id="workbench.extensions.action.showRecommendedKeymapExtensions" text="${codeMain.getMenuListLang(16)}"></item>
            <item type="separator" />
            <item id="workbench.action.openSnippets" text="${codeMain.getMenuListLang(17)}"></item>
            <item type="separator" />
            <item id="workbench.action.selectTheme" text="${codeMain.getMenuListLang(18)}"></item>
            <item id="workbench.action.selectIconTheme" text="${codeMain.getMenuListLang(19)}"></item>
            <item id ="laya_available_languages" text ="${codeMain.getMenuListLang(175)}">
                <item id ="laya_available_languages_zh-CN" text= "zh-CN"></item>
                <item id ="laya_available_languages_en-US" text= "en-US"></item>
            </item>
        </item>
        <item id="tools.ideConfig" text="${codeMain.getMenuListLang(180)}" />
        <item id="workbench.action.files.revert" text="${codeMain.getMenuListLang(20)}" />
        <item id="workbench.action.closeActiveEditor" text="${codeMain.getMenuListLang(21)}">
            <hotkey>${ctrlreplacecmd}+F4</hotkey>
        </item>
        <item id="workbench.action.closeFolder" text="${codeMain.getMenuListLang(22)}" />
        <item id="workbench.action.closeWindow" text="${codeMain.getMenuListLang(23)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+W</hotkey>
        </item>
        <item id="workbench.action.reloadWindow" text="${codeMain.getMenuListLang(24)}" />
        <item type="separator" />
        <item id="workbench.action.quit" text="${codeMain.getMenuListLang(25)}" />
    </item>
    <item id="edit" text="${codeMain.getMenuListLang(26)}">
        <item id="undo" text="${codeMain.getMenuListLang(27)}">
            <hotkey>${ctrlreplacecmd}+Z</hotkey>
        </item>
        <item id="redo" text="${codeMain.getMenuListLang(28)}">
            <hotkey>${ctrlreplacecmd}+Y</hotkey>
        </item>
        <item type="separator"/>
        <item id="editor.action.clipboardCutAction" text="${codeMain.getMenuListLang(29)}">
            <hotkey>${ctrlreplacecmd}+X</hotkey>
        </item>
        <item id="editor.action.clipboardCopyAction" text="${codeMain.getMenuListLang(30)}">
            <hotkey>${ctrlreplacecmd}+C</hotkey>
        </item>
        <item id="editor.action.clipboardPasteAction" text="${codeMain.getMenuListLang(31)}">
            <hotkey>${ctrlreplacecmd}+V</hotkey>
        </item>
        <item type="separator"/>
        <item id="actions.find" text="${codeMain.getMenuListLang(32)}">
            <hotkey>${ctrlreplacecmd}+F</hotkey>
        </item>
        <item id="editor.action.startFindReplaceAction" text="${codeMain.getMenuListLang(33)}">
            <hotkey>${ctrlreplacecmd}+H</hotkey>
        </item>
        <item type="separator"/>
        <item id="search.action.focusActiveEditor" text="${codeMain.getMenuListLang(34)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+F</hotkey>
        </item>
        <item id="workbench.action.replaceInFiles" text="${codeMain.getMenuListLang(35)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+H</hotkey>
        </item>
        <item type="separator"/>
        <item id="editor.action.commentLine" text="${codeMain.getMenuListLang(36)}">
            <hotkey>${ctrlreplacecmd}+/</hotkey>
        </item>
        <item id="editor.action.blockComment" text="${codeMain.getMenuListLang(37)}">
            <hotkey>Alt+${shiftreplacecmd}+A</hotkey>
        </item>
        <item id="editor.emmet.action.expandAbbreviation" text="Emmet:${codeMain.getMenuListLang(38)}">
            <hotkey>Tab</hotkey>
        </item>
        <item id="workbench.action.showEmmetCommands" text="Emmet"></item>
    </item>
    <item id="selection" text="${codeMain.getMenuListLang(39)}">
        <item id="editor.action.selectAll" text="${codeMain.getMenuListLang(40)}">
            <hotkey>${ctrlreplacecmd}+A</hotkey>
        </item>
        <item id="editor.action.smartSelect.grow" text="${codeMain.getMenuListLang(41)}">
            <hotkey>Alt+${shiftreplacecmd}+Right Arrow</hotkey>   
        </item>
        <item id="editor.action.smartSelect.shrink" text="${codeMain.getMenuListLang(42)}">
            <hotkey>Alt+${shiftreplacecmd}+Left Arrow</hotkey>
        </item>
        <item id="editor.action.copyLinesUpAction" text="${codeMain.getMenuListLang(43)}">
            <hotkey>Alt+${shiftreplacecmd}+Up Arrow</hotkey>
        </item>
        <item id="editor.action.copyLinesDownAction" text="${codeMain.getMenuListLang(44)}">
            <hotkey>Alt+${shiftreplacecmd}+Down Arrow</hotkey>
        </item>
        <item id="editor.action.moveLinesUpAction" text="${codeMain.getMenuListLang(45)}">
            <hotkey>Alt+Up Arrow</hotkey>
        </item>
        <item id="editor.action.moveLinesDownAction" text="${codeMain.getMenuListLang(46)}">
            <hotkey>Alt+Down Arrow</hotkey>
        </item>
        <item type="separator"/>
        <item id="editor.action.insertCursorAbove" text="${codeMain.getMenuListLang(47)}">
            <hotkey>Alt+${ctrlreplacecmd}+Up Arrow</hotkey>
        </item>
        <item id="editor.action.insertCursorBelow" text="${codeMain.getMenuListLang(48)}">
            <hotkey>Alt+${ctrlreplacecmd}+Down Arrow</hotkey>
        </item>
        <item id="editor.action.insertCursorAtEndOfEachLineSelected" text="${codeMain.getMenuListLang(49)}">
            <hotkey>Alt+${shiftreplacecmd}+I</hotkey>
        </item>
        <item id="editor.action.addSelectionToNextFindMatch" text="${codeMain.getMenuListLang(50)}">
            <hotkey>${ctrlreplacecmd}+D</hotkey>
        </item>
        <item id="editor.action.addSelectionToPreviousFindMatch" text="${codeMain.getMenuListLang(51)}"></item>
        <item id="editor.action.selectHighlights" text="${codeMain.getMenuListLang(52)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+L</hotkey>
        </item>
    </item>
    <item id="view" text="${codeMain.getMenuListLang(53)}">
        <item id="workbench.action.showCommands" text="${codeMain.getMenuListLang(54)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+P</hotkey>
        </item>
        <item type="separator"/>
        <item id="workbench.view.explorer" text="${codeMain.getMenuListLang(55)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+E</hotkey>
        </item>
        <item id="search.action.focusActiveEditor" text="${codeMain.getMenuListLang(56)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+F</hotkey>
        </item>
        <item id="workbench.view.git" text="Git">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+G</hotkey>
        </item>
        <item id="workbench.view.debug" text="${codeMain.getMenuListLang(57)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+D</hotkey>
        </item>
        <item id="workbench.view.extensions" text="${codeMain.getMenuListLang(58)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+X</hotkey>
        </item>
        <item type="separator"/>
        <item id="workbench.action.output.toggleOutput" text="${codeMain.getMenuListLang(59)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+U</hotkey>
        </item>
        <item id="workbench.debug.action.toggleRepl" text="${codeMain.getMenuListLang(60)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+Y</hotkey>
        </item>
        <item id="workbench.action.terminal.toggleTerminal" text="${codeMain.getMenuListLang(61)}">
            <hotkey>${ctrlreplacecmd}+\`</hotkey>
        </item>
        <item type="separator"/>
        <item id="workbench.action.toggleFullScreen" text="${codeMain.getMenuListLang(62)}">
            <hotkey>F11</hotkey>
        </item>
        <item id="workbench.action.toggleZenMode" text="${codeMain.getMenuListLang(63)}"/>
        <item id="workbench.action.toggleMenuBar" text="${codeMain.getMenuListLang(64)}"/>
        <item type="separator"/>
        <item id="workbench.action.splitEditor" text="${codeMain.getMenuListLang(65)}">
            <hotkey>${ctrlreplacecmd}+\\</hotkey>
        </item>
        <item id="workbench.action.toggleEditorGroupLayout" text="${codeMain.getMenuListLang(66)}">
            <hotkey>Alt+${shiftreplacecmd}+1</hotkey>
        </item>
        <item id="workbench.action.toggleSidebarPosition" text="${codeMain.getMenuListLang(67)}"></item>
        <item id="workbench.action.toggleSidebarVisibility" text="${codeMain.getMenuListLang(68)}">
            <hotkey>${ctrlreplacecmd}+B</hotkey>
        </item>
        <item id="workbench.action.togglePanel" text="${codeMain.getMenuListLang(69)}">
            <hotkey>${ctrlreplacecmd}+J</hotkey>
        </item>
        <item id="workbench.action.toggleStatusbarVisibility" text="${codeMain.getMenuListLang(70)}"></item>
        <item id="workbench.action.toggleActivityBarVisibility" text="${codeMain.getMenuListLang(71)}"></item>
        <item type="separator"/>
        <item id="editor.action.toggleWordWrap" text="${codeMain.getMenuListLang(72)}">
            <hotkey>Alt+Z</hotkey>
        </item>
        <item id="editor.action.toggleRenderWhitespace" text="${codeMain.getMenuListLang(73)}"></item>
        <item id="editor.action.toggleRenderControlCharacter" text="${codeMain.getMenuListLang(74)}"></item>
        <item type="separator"/>
        <item id="workbench.action.zoomIn" text="${codeMain.getMenuListLang(75)}">
            <hotkey>${ctrlreplacecmd}+=</hotkey>
        </item>
        <item id="workbench.action.zoomOut" text="${codeMain.getMenuListLang(76)}">
            <hotkey>${ctrlreplacecmd}+-</hotkey>
        </item>
        <item id="workbench.action.zoomReset" text="${codeMain.getMenuListLang(77)}"></item>
    </item>
    <item id="go" text="${codeMain.getMenuListLang(78)}">
        <item id="workbench.action.navigateBack" text="${codeMain.getMenuListLang(79)}">
            <hotkey>Alt+Left Arrow</hotkey>
        </item>
        <item id="workbench.action.navigateForward" text="${codeMain.getMenuListLang(80)}">
            <hotkey>Alt+Right Arrow</hotkey>
        </item>
         <item type="separator"/>
        <item id="switch_editor" text="${codeMain.getMenuListLang(81)}">
            <item id="workbench.action.nextEditor" text="${codeMain.getMenuListLang(82)}">
                <hotkey>${ctrlreplacecmd}+Page Down</hotkey>
            </item>
            <item id="workbench.action.previousEditor" text="${codeMain.getMenuListLang(83)}">
                <hotkey>${ctrlreplacecmd}+Page Up</hotkey>
            </item>
            <item type="separator"/>
            <item id="workbench.action.openNextRecentlyUsedEditorInGroup" text="${codeMain.getMenuListLang(84)}">
                <hotkey>${ctrlreplacecmd}+Tab</hotkey>
            </item>
            <item id="workbench.action.openPreviousRecentlyUsedEditorInGroup" text="${codeMain.getMenuListLang(85)}">
                <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+Tab</hotkey>
            </item>
        </item>
        <item id="switch_group" text="${codeMain.getMenuListLang(86)}">
            <item id="workbench.action.focusFirstEditorGroup" text="${codeMain.getMenuListLang(87)}">
                <hotkey>${ctrlreplacecmd}+1</hotkey>
            </item>
            <item id="workbench.action.focusSecondEditorGroup" text="${codeMain.getMenuListLang(88)}">
                <hotkey>${ctrlreplacecmd}+2</hotkey>
            </item>
            <item id="workbench.action.focusThirdEditorGroup" text="${codeMain.getMenuListLang(89)}">
                <hotkey>${ctrlreplacecmd}+3</hotkey>
            </item>
            <item type="separator"/>
            <item id="workbench.action.focusNextGroup" text="${codeMain.getMenuListLang(90)}"></item>
            <item id="workbench.action.focusPreviousGroup" text="${codeMain.getMenuListLang(91)}"></item>
        </item>
         <item type="separator"/>
        <item id="workbench.action.quickOpen" text="${codeMain.getMenuListLang(92)}">
            <hotkey>${ctrlreplacecmd}+P</hotkey>
        </item>
        <item id="workbench.action.gotoSymbol" text="${codeMain.getMenuListLang(93)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+O</hotkey>
        </item>
        <item id="workbench.action.showAllSymbols" text="${codeMain.getMenuListLang(94)}">
            <hotkey>${ctrlreplacecmd}+T</hotkey>
        </item>
        <item id="editor.action.goToDeclaration" text="${codeMain.getMenuListLang(95)}">
            <hotkey>F12</hotkey>
        </item>
        <item id="workbench.action.gotoLine" text="${codeMain.getMenuListLang(96)}">
            <hotkey>${ctrlreplacecmd}+G</hotkey>
        </item>
    </item>
    <item id ="tool" text="${codeMain.getMenuListLang(97)}">
        <item id="tool.swfConvert" text="${codeMain.getMenuListLang(98)}"></item>
        <item id="tool.jsCompress" text="${codeMain.getMenuListLang(99)}"></item>
        <item id="tool.tpgCompress" text="${codeMain.getMenuListLang(182)}"></item>
        <item id="tool.dbConvert" text="${codeMain.getMenuListLang(100)}"></item>
        <item id="tool.spineConvert" text="${codeMain.getMenuListLang(101)}"></item>
        <item id="tool.psdConvert" text="Psd2UI"></item>
        <item id="tool.atlaPack" text="${codeMain.getMenuListLang(102)}"></item>
        <item id="tool.runtimeDownload" text="${codeMain.getMenuListLang(103)}"></item>
        <item id="tool.appBuild" text="${codeMain.getMenuListLang(106)}"></item>
        <item id="tool.3dConvert" text="${codeMain.getMenuListLang(107)}"></item>
        <item id="tool.wxdevtool" text="${codeMain.getMenuListLang(179)}"></item>
    </item>
    <item id ="prolaya" text="${codeMain.getMenuListLang(108)}">
        <item id="libselection" text="${codeMain.getMenuListLang(109)}"></item>
        <item id="compilePro" text="${codeMain.getMenuListLang(176)}"></item>
        <item id="publishPro" text="${codeMain.getMenuListLang(181)}"></item>
        <item id="compileAndRunPro" text="${codeMain.getMenuListLang(178)}"></item>
        <item id="publishPro2" text="${codeMain.getMenuListLang(177)}"></item>
    </item>
     <item id ="help" text="${codeMain.getMenuListLang(110)}">
      <item id="workbench.action.toggleDevTools" text="${codeMain.getMenuListLang(111)}">
      </item>
      <item id="layaboxPublic" text="${codeMain.getMenuListLang(112)}">
      </item>
      <item id="layademo" text="${codeMain.getMenuListLang(113)}">
      </item>
      <item id="devcenter" text="${codeMain.getMenuListLang(114)}">
      </item>
      <item id="openUserPath" text="${codeMain.getMenuListLang(115)}">
      </item>
      <item id="checkupdateVersions" text="${codeMain.getMenuListLang(116)}">
      </item>
      <item id="changelog" text="${codeMain.getMenuListLang(117)}">
      </item>
      <item id="version" text="${codeMain.getMenuListLang(118)}${codeMain.layaIDEVersion}">
      </item>
    </item>
     <item id ="layaqrcodeshowqrcode" img="res/ide/wifi.png" text="${codeMain.getMenuListLang(119)}">
     </item>
    </item>
</menu>
`);
            codeMenuDiv.setOpenMode("win");
            codeMenuDiv.attachEvent("onClick", function(id)
            {
                console.log("菜单")
                if (id.indexOf("listrecentOpenList") != -1)
                {
                    var ide = codeMain.recentOpenList[id];
                    codeMain._codechannel.openWindow([ide]);
                    return
                }
                else if (id == "workbench.action.clearEditorHistory")
                {
                    codeMain.clearRecentOpen();
                    return;
                }
                codeMain.menuclickHandler(id);
            });

            window.addEventListener("resize", resetMenuHeight);
            resetMenuHeight();
        }

        function uiMenuDivHandler()
        {
            if(uicodeMenuDiv){
                return
            }
            uicodeMenuDiv = new dhtmlXMenuObject(
            {
                parent: "uicodeMenuList"
            });
            uicodeMenuDiv.loadStruct(`
<?xml version="1.0"?>
<menu>
    <item id="file" text="${codeMain.getMenuListLang(1)}">
        <item id="file.newProject" text="${codeMain.getMenuListLang(2)}"></item>
        <item id="file.newUntitledFile" text="${codeMain.getMenuListLang(3)}">
            <hotkey>${ctrlreplacecmd}+N</hotkey>
        </item>
        <item id="file.newDir" text="${codeMain.getMenuListLang(120)}">
            <hotkey>${ctrlreplacecmd}+D</hotkey>
        </item>
        <item type="separator"/>
        <item id="file.openProject" text="${codeMain.getMenuListLang(5)}">
        </item>
        <item id="workbench.action.openRecent" text="${codeMain.getMenuListLang(8)}">
            <item id="workbench.action.clearEditorHistory" text="${codeMain.getMenuListLang(10)}"></item>
            <item type="separator" />
        </item>
        <item id="file.convertProject" text="${codeMain.getMenuListLang(121)}"></item>
        <item type="separator"/>
        <item id="file.setPro" text="${codeMain.getMenuListLang(122)}">
            <hotkey>F9</hotkey>
        </item>
        <item id="file.settingPage" text="${codeMain.getMenuListLang(123)}">
            <hotkey>${ctrlreplacecmd}+P</hotkey>
        </item>
        <item id="file.refreshEditor" text="${codeMain.getMenuListLang(24)}"></item>
    </item>
    <item id="edit" text="${codeMain.getMenuListLang(124)}">
        <item id="edit.undo" text="${codeMain.getMenuListLang(125)}">
            <hotkey>${ctrlreplacecmd}+Z</hotkey>
        </item>
        <item id="edit.redo" text="${codeMain.getMenuListLang(126)}">
            <hotkey>${ctrlreplacecmd}+Y</hotkey>
        </item>
         <item id="edit.delete" text="${codeMain.getMenuListLang(127)}">
            <hotkey>Delete</hotkey>
        </item>
        <item type="separator"/>
        <item id="edit.copy" text="${codeMain.getMenuListLang(128)}">
            <hotkey>${ctrlreplacecmd}+C</hotkey>
        </item>
        <item id="edit.paste" text="${codeMain.getMenuListLang(129)}">
            <hotkey>${ctrlreplacecmd}+V</hotkey>
        </item>
        <item id="paseteEdP" text="${codeMain.getMenuListLang(130)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+V</hotkey>
        </item>
        <item id="cutEd" text="${codeMain.getMenuListLang(131)}">
            <hotkey>${ctrlreplacecmd}+X</hotkey>
        </item>
        <item type="separator"/>
        <item id="selectAllEd" text="${codeMain.getMenuListLang(132)}">
            <hotkey>${ctrlreplacecmd}+A</hotkey>
        </item>
        <item id="fastMoveEd" text="${codeMain.getMenuListLang(133)}">
            <hotkey>${shiftreplacecmd}+${codeMain.getMenuListLang(134)}</hotkey>
        </item>
        <item id="coverConEd" text="${codeMain.getMenuListLang(135)}">
            <hotkey>${ctrlreplacecmd}+B</hotkey>
        </item>
        <item id="remodeConEd" text="${codeMain.getMenuListLang(136)}">
            <hotkey>${ctrlreplacecmd}+U</hotkey>
        </item>
        <item id="reCopyEd" text="${codeMain.getMenuListLang(137)}">
            <hotkey>${ctrlreplacecmd}+R</hotkey>
        </item>
        <item id="fixResEd" text="${codeMain.getMenuListLang(138)}">
            <hotkey>${ctrlreplacecmd}+K</hotkey>
        </item>
        <item id="findReplaceEd" text="${codeMain.getMenuListLang(139)}">
            <hotkey>${ctrlreplacecmd}+F</hotkey>
        </item>
        <item id="viewClip" text="${codeMain.getMenuListLang(140)}">
            <hotkey>${ctrlreplacecmd}+L</hotkey>
        </item>
         <item id="saveEd" text="${codeMain.getMenuListLang(141)}">
            <hotkey>${ctrlreplacecmd}+S</hotkey>
        </item>
        <item id="saveAllEd" text="${codeMain.getMenuListLang(142)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+S</hotkey>
        </item>
    </item>
    <item id="view" text="${codeMain.getMenuListLang(143)}">
      <item id="bigViewEd" text="${codeMain.getMenuListLang(144)}">
            <hotkey>${ctrlreplacecmd}++</hotkey>
      </item>
       <item id="smallViewEd" text="${codeMain.getMenuListLang(145)}">
            <hotkey>${ctrlreplacecmd}+-</hotkey>
      </item>
        <item id="resetViewEd" text="${codeMain.getMenuListLang(146)}">
            <hotkey>${ctrlreplacecmd}+0</hotkey>
      </item>
      <item id="moveViewEd" text="${codeMain.getMenuListLang(147)}">
      </item>
      <item id="showViewEd" text="${codeMain.getMenuListLang(148)}">
            <hotkey>F8</hotkey>
      </item>
        <item id="shoeViewDeEd" text="${codeMain.getMenuListLang(149)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+R</hotkey>
      </item>
        <item id="upEd" text="${codeMain.getMenuListLang(150)}">
            <hotkey>${ctrlreplacecmd}+↑</hotkey>
      </item>
        <item id="downEd" text="${codeMain.getMenuListLang(151)}">
            <hotkey>${ctrlreplacecmd}+↓</hotkey>
      </item>
    </item>
    <item id="tool" text="${codeMain.getMenuListLang(97)}">
        <item id="tool.swfConvert" text="${codeMain.getMenuListLang(98)}"></item>
        <item id="tool.jsCompress" text="${codeMain.getMenuListLang(99)}"></item>
        <item id="tool.tpgCompress" text="${codeMain.getMenuListLang(182)}"></item>
        <item id="tool.dbConvert" text="${codeMain.getMenuListLang(100)}"></item>
        <item id="tool.spineConvert" text="${codeMain.getMenuListLang(101)}"></item>
        <item id="tool.psdConvert" text="Psd2UI"></item>
        <item id="tool.atlaPack" text="${codeMain.getMenuListLang(102)}"></item>
        <item id="tool.runtimeDownload" text="${codeMain.getMenuListLang(103)}"></item>
        <item id="tool.appBuild" text="${codeMain.getMenuListLang(106)}"></item>
        <item id="tool.3dConvert" text="${codeMain.getMenuListLang(107)}"></item>
        <item id="tool.wxdevtool" text="${codeMain.getMenuListLang(179)}"></item>
    </item>
    <item id="window" text="${codeMain.getMenuListLang(152)}">
        <item id="movclipPanel" text="${codeMain.getMenuListLang(153)}"></item>
        <item id="FramePropPanel" text="${codeMain.getMenuListLang(154)}"></item>
        <item id="projPanelEd" text="${codeMain.getMenuListLang(155)}"></item>
        <item id="resPanelEd" text="${codeMain.getMenuListLang(156)}"></item>
        <item id="objPanelEd" text="${codeMain.getMenuListLang(157)}"></item>
        <item id="displayTreePanel" text="${codeMain.getMenuListLang(158)}"></item>
        <item id="CompPanel" text="${codeMain.getMenuListLang(159)}"></item>
        <item id="compPanel" text="${codeMain.getMenuListLang(160)}"></item>
        <item id="resetPanel" text="${codeMain.getMenuListLang(161)}">
             <hotkey>F3</hotkey>
        </item>
    </item>
    <item id ="prolaya" text="${codeMain.getMenuListLang(174)}">
        <item id="file.settingPro" text="${codeMain.getMenuListLang(162)}"></item>
        <item id="libselection" text="${codeMain.getMenuListLang(109)}"></item>
    </item>
    <item id="out" text="${codeMain.getMenuListLang(163)}">
        <item id="pushEd" text="${codeMain.getMenuListLang(163)}">
            <hotkey>F12</hotkey>
        </item>
        <item id="cleanPush" text="${codeMain.getMenuListLang(164)}">
            <hotkey>${ctrlreplacecmd}+F12</hotkey>
        </item>
         <item id="laya.exportcode" text="${codeMain.getMenuListLang(165)}">
            <hotkey>F11</hotkey>
        </item>
        <item id="pushFinalEd" text="${codeMain.getMenuListLang(166)}">
        </item>
        <item id="laya.lang" text="${codeMain.getMenuListLang(167)}">
        </item>
        <item id="refreshPanelEd" text="${codeMain.getMenuListLang(168)}">
             <hotkey>F5</hotkey>
        </item>
        <item id="refreshPagePanelEd" text="${codeMain.getMenuListLang(169)}">
             <hotkey>F6</hotkey>
        </item>
        <item id="refreshResPanelEd" text="${codeMain.getMenuListLang(170)}">
             <hotkey>F7</hotkey>
        </item>
        <item id="findNoPageEd" text="${codeMain.getMenuListLang(171)}">
             <hotkey>F4</hotkey>
        </item>
    </item>
     <item id ="extensions" text="${codeMain.getMenuListLang(172)}">
     </item>
     <item id ="help" text="${codeMain.getMenuListLang(110)}">
      <item id="workbench.action.toggleDevTools" text="${codeMain.getMenuListLang(111)}">
      </item>
      <item id="layaboxPublic" text="${codeMain.getMenuListLang(112)}">
      </item>
      <item id="layademo" text="${codeMain.getMenuListLang(113)}">
      </item>
      <item id="devcenter" text="${codeMain.getMenuListLang(114)}">
      </item>
      <item id="openUserPath" text="${codeMain.getMenuListLang(115)}">
      </item>
      <item id="checkupdateVersions" text="${codeMain.getMenuListLang(116)}">
      </item>
      <item id="changelog" text="${codeMain.getMenuListLang(117)}">
      </item>
      <item id="version" text="${codeMain.getMenuListLang(118)}${codeMain.layaIDEVersion}">
      </item>
    </item>
</menu>
`);         
            uicodeMenuDiv.detachEvent("extensions")
            uicodeMenuDiv.setOpenMode("win");
            uicodeMenuDiv.attachEvent("onClick", function(id)
            {
                console.log("菜单")
                if (id.indexOf("listrecentOpenList") != -1)
                {
                    var idef = codeMain.recentOpenList[id];
                    codeMain._codechannel.openWindow([idef]);
                    return
                }
                else if (id == "workbench.action.clearEditorHistory")
                {
                    codeMain.clearRecentOpen()
                }
                else if (id == "extensions")
                {
                    return
                }
                else if (id.indexOf("extensionsUIMenu") != -1)
                {
                    var notice = id.split("$");
                    ide.managers.Notice.notify(notice[1]);
                    return
                }
                codeMain.editeMenuhandler(id);
            });

            resetMenuHeight();
        }


        function aksPageMenuDivHandler()
        {
            if(aksPageMenuDiv){
                return
            }
            aksPageMenuDiv = new dhtmlXMenuObject(
            {
                parent: "layaaskMenuList"
            });
            aksPageMenuDiv.loadStruct(`
<?xml version="1.0"?>
<menu>
    <item id="file" text="${codeMain.getMenuListLang(1)}">
       <item id="createlayapro" text="${codeMain.getMenuListLang(2)}">
        </item>
        <item id="workbench.action.files.newUntitledFile" text="${codeMain.getMenuListLang(3)}">
            <hotkey>${ctrlreplacecmd}+N</hotkey>
        </item>
        <item id="workbench.action.newWindow" text="${codeMain.getMenuListLang(4)}">
            <hotkey>${ctrlreplacecmd}+${shiftreplacecmd}+N</hotkey>
        </item>
        <item type="separator" />
        <item id="workbench.action.openProLaya" text="${codeMain.getMenuListLang(5)}"> </item>
    </item>
    <item id="tool" text="${codeMain.getMenuListLang(97)}">
        <item id="tool.swfConvert" text="${codeMain.getMenuListLang(98)}"></item>
        <item id="tool.jsCompress" text="${codeMain.getMenuListLang(99)}"></item>
        <item id="tool.tpgCompress" text="${codeMain.getMenuListLang(182)}"></item>
        <item id="tool.dbConvert" text="${codeMain.getMenuListLang(100)}"></item>
        <item id="tool.spineConvert" text="${codeMain.getMenuListLang(101)}"></item>
        <item id="tool.atlaPack" text="${codeMain.getMenuListLang(102)}"></item>
        <item id="tool.runtimeDownload" text="${codeMain.getMenuListLang(103)}"></item>
        <item id="tool.appBuild" text="${codeMain.getMenuListLang(106)}"></item>
        <item id="tool.3dConvert" text="${codeMain.getMenuListLang(107)}"></item>
    </item>
  <item id ="help" text="${codeMain.getMenuListLang(110)}">
      <item id="workbench.action.toggleDevTools" text="${codeMain.getMenuListLang(111)}">
      </item>
      <item id="layaboxPublic" text="${codeMain.getMenuListLang(112)}">
      </item>
      <item id="layademo" text="${codeMain.getMenuListLang(113)}">
      </item>
      <item id="devcenter" text="${codeMain.getMenuListLang(114)}">
      </item>
      <item id="openUserPath" text="${codeMain.getMenuListLang(115)}">
      </item>
      <item id="checkupdateVersions" text="${codeMain.getMenuListLang(116)}">
      </item>
      <item id="changelog" text="${codeMain.getMenuListLang(117)}">
      </item>
      <item id="version" text="${codeMain.getMenuListLang(118)}${codeMain.layaIDEVersion}">
      </item>
</menu>
`);
            aksPageMenuDiv.setOpenMode("win");
            aksPageMenuDiv.attachEvent("onClick", function(id)
            {
                codeMain.menuclickHandler(id);
            });
        }

        function resetMenuHeight()
        {
            var menuItemHeight = 30;
            var itemNum = (window.innerHeight - /*top*/ 28 - /*self*/ 71) / menuItemHeight;
            codeMenuDiv.setOverflowHeight(itemNum);
            if (uicodeMenuDiv)
            {
                itemNum = (window.innerHeight - /*top*/ 28 - /*self*/ 49) / menuItemHeight;
                uicodeMenuDiv.setOverflowHeight(itemNum);
            }
        }


        function toolbar()
        {
            var xml = `<?xml version="1.0"?>
<toolbar>
    <item id="workbench.action.files.newUntitledFile" width ="10" height ="10" type="button" img="res/ide/toolbar/file.png" title="Tooltip here" action="myFunction">
    </item>
    <item id="save" type="button" img="res/ide/toolbar/pro.png"/>
    <item id="workbench.action.files.saveAll" type="button" imgdis="res/ide/toolbar/save.png" title="Tooltip here"/>
    <item id="copy" type="button" imgdis="res/ide/toolbar/b.png" enabled="false"/>
    <item id="paste" type="button" img="paste.gif" hidden="true"/>
</toolbar>
`;
            var myToolbar = new dhtmlXToolbarObject(
            {
                parent: "debugtoobar",
                onClick: function()
                {
                    alert("Toolbar item was clicked");
                }
            });
            myToolbar.loadStruct(xml);
        }