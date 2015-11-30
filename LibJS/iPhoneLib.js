/*
 *taobao4iPhone 自动化测试的公共方法
 */

/*
 *用户登录，参数：用户名，密码 
 *点击我的淘宝，输入用户名，密码，登录后回到主页
 */
function Login(app,name,password) {
	app.tabBar().buttons()["我"].doTap();
	var text = app.navigationBar().rightButton().name();
	
	if(app.navigationBar().rightButton().name() == "登录") {
			
		var userNameField = win.tableViews()[0].cells()["帐  号:"].textFields()[0];
		userNameField.setValue(""); //清空登录时，帐号	的输入框
		userNameField.doTap();
		
		userNameField.setValue(name);
		
		var passWordField =win.tableViews()[0].cells()["密  码:"].secureTextFields()[0];
		
		passWordField.tap();
		passWordField.setValue(password);
		
		app.navigationBar().buttons()["登录"].doTap();
		
	} else {
		app.navigationBar().buttons()["退出登录"].doTap();
		app.actionSheet().buttons()["确定"].tap();
		
		var userNameField = win.tableViews()[0].cells()["帐  号:"].textFields()[0];
		userNameField.tap();
		userNameField.setValue(name);
		
		var passWordField =win.tableViews()[0].cells()["密  码:"].secureTextFields()[0];
		
		passWordField.tap();
		passWordField.setValue(password);
		
		app.navigationBar().buttons()["登录"].doTap();
	}
	app.tabBar().buttons()["首页"].doTap();
}


function Logout(app){
	
}