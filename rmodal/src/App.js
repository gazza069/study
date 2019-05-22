import React, { Component } from 'react'
import Faker from 'faker'
import Modal from 'react-modal'
 
Modal.setAppElement('#root')
 
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      user: {
        products: [],
      },
      modalIsOpen: false,
    }
  }
 
  componentWillMount() {
    for (let i = 0; i < 10; i++) {
      let products = []
 
      for (let j = 0; j < 6; j++) {
        const product = {
          name: Faker.commerce.productName(),
          price: Faker.commerce.price(),
          image: Faker.image.food(30, 40),
        }
        products = [...products, product]
      }
 
      const user = {
        name: Faker.internet.userName(),
        email: Faker.internet.email(),
        avatar: Faker.internet.avatar(),
        products: products,
      }
      this.setState(prevState => ({
        users: [...prevState.users, user],
      }))
    }
  }
 
  openModal(user) {
    this.setState({
      user: user,
      modalIsOpen: true,
    })
  }
 
  closeModal() {
    this.setState({ modalIsOpen: false })
  }
 
  renderProducts(product) {
    return (
      <div style={{ border: 'solid 1px #eee' }}>
        <img src={product.image} alt={product.name} width="50" height="50" />
        <h4>Name: {product.name}</h4>
        <h4>Price: {product.price}</h4>
      </div>
    )
  }
 
  renderUsers(user) {
    return (
      <div style={{ border: 'solid 1px #eee' }} onClick={this.openModal.bind(this, user)}>
        <img src={user.avatar} alt={user.name} width="50" height="50" />
        <h4>Name: {user.name}</h4>
        <h4>Email: {user.email}</h4>
      </div>
    )
  }
 
  render() {
    return (
      <div>
        {this.state.users.map(user => this.renderUsers(user))}
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>
            {this.state.user.name}
            の制作物
          </h2>
          <button onClick={this.closeModal.bind(this)}>Close</button>
          {this.state.user.products.map(product => this.renderProducts(product))}
        </Modal>
      </div>
    )
  }
}
 
const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
  },
  content: {
    position: 'absolute',
    top: '40px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
}
 
export default App