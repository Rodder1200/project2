var app = new Vue({
  el: '#app',
  data: {
    name: null,
    tel: null,
    address: null,
    priceForSize: 0,
    errors: {
      name: null,
      tel: null,
      address: null,
      size: null
    },
    poppingTypes: {
      bacon: { 
        price: 3,
        show: false  
      },
      paperoni: {
        price: 3.5,
        show: false 
      },
      salami: {
        price: 2.5,
        show: false 
      },
      sausages: {
        price: 2,
        show: false 
      },
      turkey: {
        price: 2.5,
        show: false 
      }
    }
  },
  computed: {
    totalPrice: function() {
      var sum;

      sum = this.priceForSize;

      for (item in this.poppingTypes) {
        if (this.poppingTypes[item].show) {
          sum += this.poppingTypes[item].price;
        }
      }

      return sum;
    }
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault();
      var name = this.checkName(),
          tel = this.checkTel(),
          address = this.checkAddress();
          price = this.checkPrice(),
          modal = document.querySelector(".modal-wrapper");

      if (name && tel && address && price) {
        modal.classList.toggle("open");
      }
    },
    checkName: function() {
      if (!this.name) {
        this.errors.name = 'Enter your name.';
      } else if (!this.validName(this.name)) {
        this.errors.name = 'Enter correct name.';
      } else {
        this.errors.name = null;
        return true;
      }
      return false;
    },
    checkTel: function() {
      if (!this.tel) {
        this.errors.tel = 'Enter your phone number.';
      } else if (!this.validTel(this.tel)) {
        this.errors.tel = 'Enter correct phone number.';
      } else {
        this.errors.tel = null;
        return true;
      }
      return false;
    },
    checkAddress: function() {
      if (!this.address) {
        this.errors.address = 'Enter your address.';
      } else if (!this.validAddress(this.address)) {
        this.errors.address = 'Enter correct address.';
      } else {
        this.errors.address = null;
        return true;
      }
      return false;
    },
    checkPrice: function() {
      if (this.totalPrice == 0) {
        this.errors.size = "How much can you eat?";
      } else {
        this.errors.size = null;
        return true;
      }
      return false;
    },
    validName: function (name) {
      var re = /[\wа-я]+/ig;
      return re.test(name);
    },
    validTel: function (tel) {
      var re = /^[\+]?([0-9]{1,2})?[-\s]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{2}[-\s]?[0-9]{2}[-\s]?([0-9]{2})?$/im;
      return re.test(tel);
    },
    validAddress: function (address) {
      var re = /[\wа-я]+/ig;
      return re.test(address);
    },
    onClose: function() {
      var modal = document.querySelector(".modal-wrapper"),
          section = document.querySelector(".main");

      modal.classList.toggle("open");
      section.classList.toggle("blur");

      document.location.reload();
    }
  }
});


