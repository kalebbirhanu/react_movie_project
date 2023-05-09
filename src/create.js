import "bootstrap/dist/css/bootstrap.css";

function SignIn() {

    return (
<div className="mt-600px">
    <form>
    <div className="mb-3">

    <label htmlFor="email" className="form-label text-info">Email address:</label>
    <input type="email" className="form-control" placeholder="name@gmail.com" id="email" />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label text-info">Password:</label>
    <input type="password" className="form-control" placeholder="xxxxxxxx" id="pwd" />
  </div> 
  <div className="text-center">
  <button type="submit" className="btn btn-primary">signin</button>
  </div>
    </form>
</div>
    );
}

export default SignIn;