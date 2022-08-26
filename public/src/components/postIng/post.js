class MyPost extends HTMLElement {

  
  static get observedAttributes() {
    return ['nameprofile', 'likeImg', 'profileImg', 'kimImg', 'commentImg', 'sendImg', 'comments', 'viewers'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.likeImg = './src/imagenes/likes.png'
    this.profileImg = './src/imagenes/perfil.png'
    this.kimImg = './src/imagenes/kim.jpg'
    this.commentImg = './src/imagenes/comment.png'
    this.sendImg = './src/imagenes/send.png'
  }
  

  connectedCallback() {
    this.render();
  }


  attributeChangedCallback(propName, oldValue, newValue) {
    this[propName] = newValue;
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="/src/components/profile/style.css"
        <section>

            
            <img src=${this.profileImg} height = "50np"></img>
            <h2>${this.nameprofile}</h2>
            <p>sponsored</p>
            <img src=${this.kimImg} height = "500np"></img>
            <p> </p>
            <img src=${this.likeImg} height = "40np"></img>
            <img src=${this.commentImg} height = "40np"></img>
            <img src=${this.sendImg} height = "40np"></img>
            <p> </p>
            <span><strong>${this.viewers}</strong></span>
            <p> </p>
            <span><strong>${this.comments}</strong></span>
            
        </section>
        `;
  }
}

customElements.define('my-post', MyPost);
export default MyPost;
