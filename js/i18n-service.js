var gTrans = {
    title: {
        en: 'MyBookShop',
        es: 'spanish bookshop',
        he: 'חנות הספרים שלי'
    },
    action: {
        en: 'Add book',
        es: 'spanish add book',
        he: 'הוסף ספר',
    },
    add: {
        en: 'Add',
        es: 'spanish Aggregar',
        he: 'הוסף',
    },
    book_name: {
        en: 'Book Name',
        es: 'spanish book name',
        he: 'שם הספר',
    }, 
    book_price: {
        en: 'Price',
        es: 'spanish price',
        he: 'מחיר',
    },
    sure: {
        en: 'Are you sure?',
        es: 'Estas Seguru?',
        he: 'האם אתה בטוח?',
    },

    'add-todo-placeholder': {
        en: 'What needs to be done?',
        es: 'Que te tienes que hacer?',
        he: 'מה יש לעשות?'
    },
    about: {
        en: 'About',
        es: 'spanish about',
        he: 'אודות'
    },
    edit: {
        en: 'Edit',
        es: 'spanish Edit',
        he: 'ערוך',
    },
    remove: {
        en: 'Remove',
        es: 'spanish remove',
        he: 'הסר',
    }
}

var gCurrLang = 'en';

function doTrans() {
    var els = document.querySelectorAll('[data-trans]');
    
    for (var i = 0; i < els.length; i++) {
        var el = els[i];
        // var transKey = el.getAttribute('data-trans');
        var transKey = el.dataset.trans;
        
        var txt = getTrans(transKey);

        // Translating is actually complex and needs a library
        if (el.nodeName === 'INPUT') {
            el.setAttribute('placeholder', txt);
        } else {
            el.innerText = txt;
        }
    }
}


function getTrans(transKey) {
    var keyTrans = gTrans[transKey];
    if (!keyTrans) return 'UNKNOWN';

    var txt = keyTrans[gCurrLang];

    // If not found - use english
    if (!txt) txt = keyTrans['en'];

    return txt;
}


function setLang(lang) {
    gCurrLang = lang;
}

// function formatNumOlder(num) {
//     return num.toLocaleString('es')
// }

// function formatNum(num) {
//     return new Intl.NumberFormat(gCurrLang).format(num);
// }

function formatCurrency(num) {
    return new Intl.NumberFormat('he-IL',{ style: 'currency', currency: 'ILS' }).format(num);
}

// function formatDate(time) {

//     var options = {
//         year: 'numeric', month: 'short', day: 'numeric',
//         hour: 'numeric', minute: 'numeric',
//         hour12: true,
//     };

//     return new Intl.DateTimeFormat(gCurrLang,options).format(time);
// }


// function kmToMiles(km) {
//     return km / 1.609;
// }