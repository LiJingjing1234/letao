/**
 * Created by DELL on 2018/3/3.
 */
/**
 * Created by HUCC on 2017/11/21.
 */
//����������
//���ý��Ȼ�
NProgress.configure({ showSpinner: false });

//ע��һ��ȫ�ֵ�ajaxStart�¼������е�ajax�ڿ�����ʱ�򣬻ᴥ������¼�
$(document).ajaxStart(function () {
    //����������
    NProgress.start();
});

$(document).ajaxStop(function () {
    //��ɽ�����
    setTimeout(function () {
        NProgress.done();
    }, 500);
});


//�ǵ�½ҳ�棬�жϵ�ǰ�û��Ƿ��ǵ�¼�ˣ������¼�ˣ��ͼ��������û��½����Ҫ��ת����¼ҳ�档
if(location.href.indexOf("login.html") == -1){
    $.ajax({
        type:"get",
        url:"/employee/checkRootLogin",
        success:function (data) {
            if(data.error === 400){
                //˵���û�û�е�¼����ת����¼ҳ��
                location.href = "login.html";
            }
        }
    })
}



//����������ʾ���ع���
$(".child").prev().on("click", function () {
    $(this).next().slideToggle();
});

//�������ʾ���ع���
$(".icon_menu").on("click", function () {
    $(".lt_aside").toggleClass("now");
    $(".lt_main").toggleClass("now");
    $(".lt_topbar").toggleClass("now");
});


//�˳�����
$(".icon_logout").on("click", function () {
    $("#logoutModal").modal("show");


    //���˳���ťע���¼�, off:������е��¼�
    $(".btn_logout").off().on("click", function () {
        //console.log("Hehe");
        //����ajax�����˳�ϵͳ
        $.ajax({
            type:"get",
            url:"/employee/employeeLogout",
            success:function (data) {
                if(data.success){
                    //�˳��ɹ�
                    location.href = "login.html";
                }
            }
        });
    });
});


