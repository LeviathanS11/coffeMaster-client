import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee=useLoaderData();
    const {_id,name,quantity,supplier,taste,category,details,photo}=coffee;
    const handleUpdateCoffee=event=>{
        event.preventDefault();
        const form =event.target;

        const name=form.name.value;
        const quantity=form.quantity.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;

        const UpdatedCoffee={name,quantity,supplier,taste,category,details,photo};

        //send data to the server
        fetch('http://localhost:5000/coffee',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(UpdatedCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User added successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
            }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-extrabold ">Update coffee: {name}</h1>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex mb-5">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Coffe Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" defaultValue={name} className="input input-bordered bg-white w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" defaultValue={quantity} className="input input-bordered bg-white w-full" />
                        </label>
                    </div>
                </div>

                {/* supplier row */}
                <div className="md:flex mb-5">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Supplier Name" defaultValue={supplier} className="input input-bordered bg-white w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Taste" defaultValue={taste} className="input input-bordered bg-white w-full" />
                        </label>
                    </div>
                </div>

                {/* category and details */}
                <div className="md:flex mb-5">
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Category Name" defaultValue={category} className="input input-bordered bg-white w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" defaultValue={details} className="input input-bordered bg-white w-full" />
                        </label>
                    </div>
                </div>

                {/* photo url */}
                <div className="mb-5">
                    <div className="form-control w-full pl-4">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" defaultValue={photo} className="input input-bordered bg-white w-full" />
                        </label>
                    </div>
                </div>
                <input  className="btn btn-block" type="submit" value="Update Coffee" />
            </form>
        </div>
    );
};

export default UpdateCoffee;