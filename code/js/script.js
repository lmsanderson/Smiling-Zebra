/*extend #aboutme*/
$("#expandcontract").click(function()
	{
		if($("#aboutme").is(":hidden"))
				{
					$("#aboutme").slideDown("slow");
				}
		
		else
			{
				$("#aboutme").slideUp("slow");
			}
	}
);


