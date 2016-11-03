class SimpleElement extends HTMLElement {
  static get observedAttributes () {
    return ['data-info']
  }

  get template () {
    return '#simple-element-template'
  }

    /* Web Component v1 standard */
  constructor () {
    super()
  }

    /* Web Component v1 standard */
  connectedCallback () {
    this.render()
    this.addClickEvent()
  }

    /* Web Component v1 standard */
  attributeChangedCallback (name, oldValue, newValue) {
    if (this.querySelector('.simpleElement_count')) {
      this.querySelector('.simpleElement_count').textContent = this.getAttribute('data-info')
    }
  }

  render () {
    const mainTest = (document._currentScript || document.currentScript).ownerDocument

    if ('content' in document.createElement('template')) {
      // Good to go!
      const t = mainTest.querySelector(this.template)
      const instance = t.content.cloneNode(true)
      this.appendChild(instance)
    } else {
      // Use old templating techniques or libraries.
      this.insertAdjacentHTML('afterbegin', mainTest.querySelector(this.template).innerHTML)
    }
  }

  addClickEvent () {
    this.addEventListener('click', function (e) {
      new Function(this.getAttribute('data-method'))()
    })
  }
}

customElements.define('simple-element', SimpleElement)
