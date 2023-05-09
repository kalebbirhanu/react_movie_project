import "bootstrap/dist/css/bootstrap.css";


function Form() {

    return (
        <div className = "text-body">
          <form className="needs-validation" method="post">
          <div className="mb-3 mt-3">
    <label htmlFor="uname" className="form-label text-info">Username:</label>
    <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required />
    </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label text-info">Email address:</label>
    <input type="email" className="form-control" placeholder="name@gmail.com" id="email" />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label text-info">Password:</label>
    <input type="password" className="form-control" placeholder="xxxxxxx" id="pwd" min={8} />
  </div>
  
  <div className="form-group form-check">
    <label className="form-check-label text-info">
      <input className="form-check-input text-success" type="checkbox" /> agree
    </label>
  </div>
  <div className="text-center">
  <button type="submit" className="btn btn-primary btn-lg">Submit</button>
  </div>
</form>
        </div>
    );
}

export default Form;