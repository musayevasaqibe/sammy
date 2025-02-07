var carielement;

$(".third a").click(function () {
    carielement = $(this).parents(".third")
    console.log($(carielement).children().eq(0).attr("src"));
    $(".sebet").append(`  
    <div class="mehsul">
   <i class="fa-solid fa-xmark"></i>
        <img src="${$(carielement).children().eq(0).attr("src")}" alt="">
        <h1>${$(carielement).children().eq(1).html()}</h1>
         <p>${$(carielement).children().eq(2).text()}</p>
    </div>
    `)
})

$(".second a").click(function () {
    carielement = $(this).parent()
    $(".sebet").append(`  
    <div class="mehsul">
   <i class="fa-solid fa-xmark remove"></i>
        <img src="${$(carielement).children().eq(0).attr("src")}" alt="">
        <h1>${$(carielement).children().eq(2).html()}</h1>
         <p>${$(carielement).children().eq(3).text()}</p>
    </div>
    `)
})

$(".fa-cart-shopping").click(function () {
    $(".sebet").show()
})

$(".fa-xmark").click(function () {
    $(".sebet").hide()
})
$('.sebet').on('click', '.remove',function(){
    $(this).parent().remove()
})