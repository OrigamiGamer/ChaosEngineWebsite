## # NewGame
<!-- * 请按以下步骤来创建基本游戏示例

- 1\. 新建一个空项目

- 2\. 引用 `ChaosEngine-Module.ec` 引擎模块到你的源代码

- 3\. 将以下代码复制粘贴到你的IDE -->

* 以下代码示例是游戏的初始代码模板

```cpp
.版本 2

.程序集 NewGame

.子程序 _启动子程序, 整数型
.局部变量 WinParam, WindowParameters
.局部变量 EngineParam, EngineParameters
WinParam.title ＝ “Demo”
WinParam.style ＝ #WinStyle_MinimizeBox
WinParam.size.width ＝ 1024
WinParam.size.height ＝ 640
WinParam.pos.x ＝ -1
WinParam.pos.y ＝ -1

EngineParam.lpProc_RegObjectType ＝ &RegObjectType
EngineParam.lpProc_LoadProperties ＝ &LoadProperties
EngineParam.lpProc_LoadResource ＝ &LoadResource
EngineParam.lpProc_LoadScenes ＝ &LoadScenes
EngineParam.lpProc_LoadObjects ＝ &LoadObjects
EngineParam.lpProc_GameInit ＝ &GameInit
EngineParam.lpProc_Update ＝ &Update
EngineParam.lpProc_Render ＝ &Render
EngineParam.lpProc_GameExit ＝ &GameExit
EngineParam.lpProc_ScriptException ＝ &ScriptException
EngineParam.InitialFPS ＝ 60

Properties.Engine.Debug ＝ 是否为调试版 ()

Engine.Init (WinParam, EngineParam)
Engine.Start ()
Engine.Stop ()

返回 (0)
.子程序 RegObjectType, , , 注册物体类型
.子程序 LoadProperties, , , 加载配置
.子程序 LoadResource, , , 加载资源
.子程序 LoadScenes, , , 加载场景
.子程序 LoadObjects, , , 加载物体
.子程序 GameInit, , , 游戏初始化
.子程序 Update, , , 更新
.子程序 Render, , , 渲染
.子程序 GameExit, , , 游戏进程退出
.子程序 ScriptException, , , 脚本异常回调
.参数 Msg, 文本型
```

* 以上代码包括了 `WindowParameters`窗口参数、`EngineParameters`引擎参数、`lpProc`回调函数 等启动参数相关的配置
* <br>

## # 用法
* 这里我们用`C++`的语法来呈现上述代码，方便以文本形式阅读
```cpp
namespace NewGame {
    
    // 程序入口
    int main () {
        WindowParameters WinParam;
        EngineParameters EngineParam;

        // 窗口参数
        WinParam.title ＝ "Demo"
        WinParam.style ＝ #WinStyle_MinimizeBox // 易语言常量
        WinParam.size.width ＝ 1024
        WinParam.size.height ＝ 640
        WinParam.pos.x ＝ -1
        WinParam.pos.y ＝ -1

        // 引擎参数
        EngineParam.lpProc_RegObjectType ＝ &RegObjectType
        EngineParam.lpProc_LoadProperties ＝ &LoadProperties
        EngineParam.lpProc_LoadResource ＝ &LoadResource
        EngineParam.lpProc_LoadScenes ＝ &LoadScenes
        EngineParam.lpProc_LoadObjects ＝ &LoadObjects
        EngineParam.lpProc_GameInit ＝ &GameInit
        EngineParam.lpProc_Update ＝ &Update
        EngineParam.lpProc_Render ＝ &Render
        EngineParam.lpProc_GameExit ＝ &GameExit
        EngineParam.lpProc_ScriptException ＝ &ScriptException
        EngineParam.InitialFPS ＝ 60

        Properties.Engine.Debug ＝ 是否为调试版 ()

        Engine.Init (WinParam, EngineParam)
        Engine.Start ()
        Engine.Stop ()

        return 0;
    }

    void RegObjectType () {}
    void LoadProperties () {}
    void LoadResource () {}
    void LoadScenes () {}
    void LoadObjects () {}
    void GameInit () {}
    void Update () {}
    void Render () {}
    void GameExit () {}
    void ScriptException (string Msg) {}
    
}
```