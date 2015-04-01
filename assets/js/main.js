$(function(){
	$('a.item').click(function(){
		$('.item').removeClass('active');
		$(this).addClass('active');
		
	});
	$('.ui.dropdown').dropdown();
	
	$('#areaDoFormPessoaFisica').hide();

	$('#irParaCadastroPessoal').click(function () {
			$('#areaDoFormPessoaFisica').show();		
	});

	$('.ui.form').form({
    name: {
      identifier  : 'name',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter your name'
        },
        {
          type   : 'length[4]',
          prompt : 'Your name must be at least 4 characters'
        }
      ]
    },
    gender: {
      identifier  : 'gender',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please select a gender'
        }
      ]
    },
    username: {
      identifier : 'username',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a username'
        }
      ]
    },
    password: {
      identifier : 'password',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a password'
        },
        {
          type   : 'length[6]',
          prompt : 'Your password must be at least 6 characters'
        }
      ]
    },
    terms: {
      identifier : 'terms',
      rules: [
        {
          type   : 'checked',
          prompt : 'You must agree to the terms and conditions'
        }
      ]
    },
    data: {
      identifier : 'dataNascimentoPessoaFisica',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a date'
        }
      ]
    },
    cor: {
      identifier : 'Cidadao-cor',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a race'
        }
      ]
    },
    estadoCivil: {
      identifier : 'Cidadao-estadoCivil',
      rules: [
        {
          type   : 'empty',
          prompt : 'estado civil'
        }
      ]
    },
    nacionalidade: {
      identifier : 'Cidadao-nacionalidade',
      rules: [
        {
          type   : 'empty',
          prompt : 'estado civil'
        }
      ]
    },
    endereco: {
      identifier : 'endereco',
      rules: [
        {
          type   : 'empty',
          prompt : 'Please enter a endress'
        }
      ]
    },

  });

jQuery.validator.addMethod("dataNascimentoPessoaFisica", function (value, element) {
    //contando chars    
    if (value.length != 10) return (this.optional(element) || false);
    // verificando data
    var data = value;
    var dia = data.substr(0, 2);
    var barra1 = data.substr(2, 1);
    var mes = data.substr(3, 2);
    var barra2 = data.substr(5, 1);
    var ano = data.substr(6, 4);
    if (data.length != 10 || barra1 != "/" || barra2 != "/" || isNaN(dia) || isNaN(mes) || isNaN(ano) || dia > 31 || mes > 12) return (this.optional(element) || false);
    if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && dia == 31) return (this.optional(element) || false);
    if (mes == 2 && (dia > 29 || (dia == 29 && ano % 4 != 0))) return (this.optional(element) || false);
    if (ano < 1900) return (this.optional(element) || false);
    return (this.optional(element) || true);
}, "Informe uma data válida (dia/mes/ano)");  // Mensagem padrão 

    $("#formPessoaFisica").validate()
    
	});
