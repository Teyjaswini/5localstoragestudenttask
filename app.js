<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Student Task</title>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">

<style>
html,body{
    height:100%;
    margin:0;
}

body{
    background-image:url("https://wallpapers.com/images/featured/hd-office-background-wwmb5ymdbjbjv689.jpg");
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-attachment:scroll; /* important for mobile */
}

/* overlay for readability */
body::before{
    content:"";
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.45); /* dark overlay */
    z-index:-1;
}

/* make cards slightly transparent */
.card{
    background:rgba(255,255,255,0.95);
    border-radius:12px;
}

/* header glass effect */
header{
    background:rgba(0,123,255,0.85) !important;
    backdrop-filter:blur(5px);
}
</style>


</head>

<body>

<header class="bg-dark text-white p-4 mb-5">
    <h3 class="m-0">Student Task</h3>
</header>

<div class="container-fluid">
<div class="row">

<!-- FORM -->
<div class="col-md-4">
<div class="card">
<div class="card-body">

<form id="stdForm">

<div class="form-group">
<label>First Name</label>
<input type="text" id="fname" class="form-control" required>
</div>

<div class="form-group">
<label>Last Name</label>
<input type="text" id="lname" class="form-control" required>
</div>

<div class="form-group">
<label>Email</label>
<input type="email" id="email" class="form-control" required>
</div>

<div class="form-group">
<label>Contact</label>
<input type="text" id="contact" class="form-control" required>
</div>

<button id="stdAddBtn" class="btn btn-outline-primary btn-sm btn-block">
Add Student
</button>

<button type="button" id="stdUpdatedBtn"
class="btn btn-outline-success btn-sm btn-block d-none">
Update Student
</button>

</form>

</div>
</div>
</div>

<!-- TABLE -->
<div class="col-md-8">
<div class="card">
<div class="card-body">

<table class="table table-bordered">
<thead>
<tr>
<th>Sr</th>
<th>Full Name</th>
<th>Email</th>
<th>Contact</th>
<th>Edit</th>
<th>Delete</th>
</tr>
</thead>

<tbody id="stdContainer"></tbody>
</table>

</div>
</div>
</div>

</div>
</div>

<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<script src="app.js"></script>

</body>
</html>
