	function getInfo(){
			$.ajax(
				{
					type: "GET",
			url: "https://reqres.in/api/users/10",
			dataType: "json",
			cache: false,
			success:function(data){
				var info = data;
				document.getElementById("name").innerHTML = "Name is " + info.data.first_name + "<br/>Surname is " + info.data.last_name;
				document.getElementById("pic").src = info.data.avatar;
			},
			failure:function(err){alert(err)}
		});
	}