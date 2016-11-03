var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

let SimpleElement = function (_HTMLElement) {
  _inherits(SimpleElement, _HTMLElement);

  _createClass(SimpleElement, [{
    key: 'template',
    get: function () {
      return '#simple-element-template';
    }

    /* Web Component v1 standard */

  }], [{
    key: 'observedAttributes',
    get: function () {
      return ['data-info'];
    }
  }]);

  function SimpleElement() {
    _classCallCheck(this, SimpleElement);

    return _possibleConstructorReturn(this, (SimpleElement.__proto__ || Object.getPrototypeOf(SimpleElement)).call(this));
  }

  /* Web Component v1 standard */


  _createClass(SimpleElement, [{
    key: 'connectedCallback',
    value: function connectedCallback() {
      this.render();
      this.addClickEvent();
    }

    /* Web Component v1 standard */

  }, {
    key: 'attributeChangedCallback',
    value: function attributeChangedCallback(name, oldValue, newValue) {
      if (this.querySelector('.simpleElement_count')) {
        this.querySelector('.simpleElement_count').textContent = this.getAttribute('data-info');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      const mainTest = (document._currentScript || document.currentScript).ownerDocument;

      if ('content' in document.createElement('template')) {
        // Good to go!
        const t = mainTest.querySelector(this.template);
        const instance = t.content.cloneNode(true);
        this.appendChild(instance);
      } else {
        // Use old templating techniques or libraries.
        this.insertAdjacentHTML('afterbegin', mainTest.querySelector(this.template).innerHTML);
      }
    }
  }, {
    key: 'addClickEvent',
    value: function addClickEvent() {
      this.addEventListener('click', function (e) {
        new Function(this.getAttribute('data-method'))();
      });
    }
  }]);

  return SimpleElement;
}(HTMLElement);

customElements.define('simple-element', SimpleElement);
