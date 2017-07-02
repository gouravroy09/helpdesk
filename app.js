
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');

var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'views')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
var index = require('./routes/index');
app.get('/addAdministrator', index.addAdministrator);
app.get('/addAgent', index.addAgent);
// app.get('/login' , function(req,res){
// 	res.render('Ticketi demo - User Helpdesk main page',{title:'Add Administrator'});
// });
app.post('/login', function(req,res){
	console.log(req.body);
	if(req.body.password=='demo'){
		if(req.body.email=='admin@example.com'){
			res.redirect('/activeTickets');
		} 
		else if(req.body.email=='agent@example.com')
		{
			
				res.redirect('/agentActiveTickets');
			
		}
		else if(req.body.email=='user@example.com'){
			res.redirect('/userActiveTickets');
		}
	}
	else 
	{
		res.redirect('/');
	}
});
app.get('/completedTickets/:id', function(req,res){
	res.render('Ticketi demo - Ticket_ Tempore autem temporibus id voluptatem corporis',{title:'Add Administrator'});
});
app.get('/agentCompletedTickets/:id', function(req,res){
	res.render('Ticketi demo - Ticket_ Quo cumque qui quod quia',{title:'Add Administrator'});
});
app.get('/userCompletedTickets/1', function(req,res){
	res.render('Ticketi demo - Ticket_ Mollitia commodi ut omnis temporibus quia',{title:'Add Administrator'});
});
app.get('/userActiveTickets', function(req,res){
	res.render('Ticketi demo - User Helpdesk main page',{title:'Add Administrator'});
});
app.get('/userCompletedTickets', function(req,res){
	res.render('Ticketi demo - User Helpdesk completed page',{title:'Add Administrator'});
});

app.get('/userNewTicket', function(req,res){
	res.render('Ticketi demo - Agent New Ticket Form',{title:'Add Administrator'});
})
app.get('/agentActiveTickets', function(req,res){
	res.render('Ticketi demo - Agent Helpdesk main page',{title:'Add Administrator'});
});
app.get('/agentCompletedTickets', function(req,res){
	res.render('Ticketi demo - Agent Helpdesk completed page',{title:'Add Administrator'});
});
app.get('/agentNewTicket', function(req,res){
	res.render('Ticketi demo - Agent New Ticket Form',{title:'Add Administrator'});
})
app.get('/manageAdmin', function(req,res){
	res.render('Ticketi demo - Administrator Management',{title:'Add Administrator'});
});
app.get('/manageAgent', function(req,res){
	res.render('Ticketi demo - Agent Management',{title:'Add Administrator'});
});
app.get('/manageCategories', function(req,res){
	res.render('Ticketi demo - Categories Management',{title:'Add Administrator'});
});
app.get('/config', function(req,res){
	res.render('Ticketi demo - Configuration Settings',{title:'Add Administrator'});
});
app.get('/newCategory', function(req,res){
	res.render('Ticketi demo - Create New Category',{title:'Add Administrator'});
});
app.get('/newPriority', function(req,res){
	res.render('Ticketi demo - Create New Priority',{title:'Add Administrator'});
});
app.get('/newStatus', function(req,res){
	res.render('Ticketi demo - Create New Status',{title:'Add Administrator'});
});
app.get('/createSetting', function(req,res){
	res.render('Ticketi demo - Create Setting',{title:'Add Administrator'});
});
app.get('/editSetting', function(req,res){
	res.render('Ticketi demo - Edit Setting',{title:'Add Administrator'});
});
app.get('/priorityCritical', function(req,res){
	res.render('Ticketi demo - Edit Priority_ Critical',{title:'Add Administrator'});
});
app.get('/priorityLow', function(req,res){
	res.render('Ticketi demo - Edit Priority_ Low',{title:'Add Administrator'});
});
app.get('/priorityNormal', function(req,res){
	res.render('Ticketi demo - Edit Priority_ Normal',{title:'Add Administrator'});
});
app.get('/statusBug', function(req,res){
	res.render('Ticketi demo - Edit Status_ Bug',{title:'Add Administrator'});
});
app.get('/statusPending', function(req,res){
	res.render('Ticketi demo - Edit Status_ Pending',{title:'Add Administrator'});
});
app.get('/statusSolved', function(req,res){
	res.render('Ticketi demo - Edit Status_ Solved',{title:'Add Administrator'});
});
app.get('/completedTickets', function(req,res){
	res.render('Ticketi demo - Helpdesk completed tickts page',{title:'Add Administrator'});
});
app.get('/activeTickets', function(req,res){
	res.render('Ticketi demo - Helpdesk main page',{title:'Add Administrator'});
});
app.get('/newTicket', function(req,res){
	res.render('Ticketi demo - New Ticket Form',{title:'Add Administrator'});
});
app.get('/managePriorities', function(req,res){
	res.render('Ticketi demo - Priorities Management',{title:'Add Administrator'});
});
app.get('/manageStatuses', function(req,res){
	res.render('Ticketi demo - Statuses Management',{title:'Add Administrator'});
});
app.get('/manageAgents', function(req,res){
	res.render('Ticketi demo - Agent Management',{title:'Add Administrator'});
});
app.get('/issue', function(req,res){
	res.render('issue',{title:'Add Administrator'});
});
app.get('/issue2', function(req,res){
	res.render('issue2',{title:'Add Administrator'});
});
app.get('/ticketDashboard', function(req,res){
	res.render('Ticketi demo - Tickets System Dashboard',{title:'Add Administrator'});
});
app.get('/users', user.list);

var about = require('./routes/about');
app.get('/about', about.about);

var stationary = require('./routes/stationary');
app.get('/stationary', stationary.stationary);

var claims = require('./routes/claims');
app.get('/claims', claims.claims);

var claims = require('./routes/claims');
app.get('/finReimburse', claims.finReimburse);





http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
