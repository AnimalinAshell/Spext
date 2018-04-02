$("button").click(function() {
    let usersText = $("#ta").val();
  responsiveVoice.speak(usersText, "UK English Female", { volume: 1 });
})



