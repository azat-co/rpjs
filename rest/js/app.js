var sendURL="http://localhost:5000/messages/create.json";
var getURL="http://localhost:5000/messages/list.json";

$(document).ready(function(){
	getMessages();
	$("#send").click(function(){
		var username = $("input[name=username]").attr('value');
		var message = $("input[name=message]").attr('value');
		console.log(username)
		console.log("!")
		$.ajax({
			url: sendURL,
			headers: {
			},
			contentType: "application/json",
			dataType: "jsonp",
			processData: false,
			data: JSON.stringify({
				"username": username,
				"message": message
			}),
			type: 'POST',
			success: function() {
				console.log("sent");
				getMessages();
			},
			error: function() {
				console.log("error");
			}
		});

	});
})
function getMessages() {
	$.ajax({
		url: getURL,
		// headers: {
		// 
		// },
		contentType: "application/json",
		dataType: "jsonp",
		type: 'GET',
		success: function(data) {
			console.log("get");
			updateView(data);
		},
		error: function() {
			console.log("error");
		}
	});
}

function updateView(messages) {	
	var table=$(".table tbody");
	table.html('');
	$.each(messages.results, function (index, value) {
		var trEl=$('<tr><td>'+value.username+'</td><td>'+value.message+'</td></tr>');		
		table.append(trEl);		
	});

	console.log(messages);
}