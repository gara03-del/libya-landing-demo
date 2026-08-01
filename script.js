document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    // نقل العنصر الأول إلى نهاية القائمة
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    // نقل العنصر الأخير إلى بداية القائمة
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}