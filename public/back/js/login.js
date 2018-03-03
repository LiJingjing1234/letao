/**
 * Created by DELL on 2018/3/3.
 */
/**
 * Created by HUCC on 2017/11/21.
 */
$(function () {

    //��У��Ĺ���
    //1. �û�������Ϊ��
    //2. �û����벻��Ϊ��
    //3. �û�����ĳ�����6-12λ

    //���ʹ�ñ�У������
    //1. ����
    //2. ����bootstrapValidator
    var $form = $("form");
    $form.bootstrapValidator({

        //����У��ʱ��ͼ��,
        feedbackIcons: {
            //У��ɹ���ͼ��
            valid: 'glyphicon glyphicon-ok',
            invalid:'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

        //����У��Ĺ���
        //�ֶΣ�����ҪУ����Щ�ֶ�
        fields: {
            //username��Ӧ�ı���name���ԡ�
            username: {
                //username�Ĺ���
                validators: {
                    notEmpty: {
                        message: "�û�������Ϊ��"
                    },
                    callback: {
                        message:"�û���������"
                    }
                }

            },
            password: {

                //password�Ĺ���
                validators: {
                    notEmpty: {
                        message: "�û����벻��Ϊ��"
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: "���볤����6-12λ"
                    },
                    callback: {
                        message:"�������"
                    }
                }

            }
        }

    });



    //��Ҫ����ע��һ��У��ɹ����¼�  success.form.bv
    $form.on("success.form.bv", function (e) {

        //��ֹ�������Ĭ����Ϊ
        e.preventDefault();

        //����ajax
        console.log("�ٺٺ�");
        $.ajax({
            type:"post",
            url:"/employee/employeeLogin",
            data: $form.serialize(),
            success:function (data) {
                //����ɹ�������ת����ҳ
                if(data.success){
                    location.href = "index.html";
                }

                if(data.error === 1000){
                    //alert("�û���������");

                    //�ֶ����÷�����updateStatus��usernameУ��ʧ�ܼ���
                    //��һ���������ı��ĸ��ֶ�
                    //�ڶ����������ĳ�ʲô״̬  VALID:ͨ��  INVALID:��ͨ��
                    //������������ѡ����ʾ����Ϣ
                    $form.data("bootstrapValidator").updateStatus("username", "INVALID", "callback");
                }

                if(data.error === 1001){
                    //alert("�������");

                    $form.data("bootstrapValidator").updateStatus("password", "INVALID", "callback");
                }
            }

        });

    });


    //���ù��ܣ�������ʽ
    $("[type='reset']").on("click", function () {

        //������ʽ
        $form.data("bootstrapValidator").resetForm();

    });


});