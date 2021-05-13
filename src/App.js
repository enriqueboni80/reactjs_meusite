import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
      error: "",
    };

    this.onChange = this.onChange.bind(this);
    this.cadastrar = this.cadastrar.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  cadastrar(e) {
    e.preventDefault();
    const { nome, email, senha } = this.state;

    if (nome !== "" && email !== "" && senha !== "") {
      alert("ok funcionou");
    } else {
      this.setState({ error: "Ops! Parece que esta faltando alguma coisa" });
    }
  }

  render() {
    return (
      <div>
        <h1>Novo usuário</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={this.state.nome}
            onChange={this.onChange}
          />
          <br />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.value}
            onChange={this.onChange}
          />
          <br />
          <label>Senha:</label>
          <input
            type="password"
            name="senha"
            value={this.state.senha}
            onChange={this.onChange}
          />
          <br />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default App;
