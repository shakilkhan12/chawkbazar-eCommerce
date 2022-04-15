import {useState} from "react";
import { Link } from "react-router-dom"
import {TwitterPicker} from "react-color"
import { v4 as uuidv4 } from 'uuid';
import ScreenHeader from "../../components/ScreenHeader"
import Wrapper from "./Wrapper"
import { useAllCategoriesQuery } from "../../store/services/categoryService"
import Spinner from "../../components/Spinner"
import Colors from "../../components/Colors";
import SizesList from "../../components/SizesList";
import ImagesPreview from "../../components/ImagesPreview";
const CreateProduct = () => {
    const {data = [], isFetching} = useAllCategoriesQuery();
    const [state, setState] = useState({
        title: '',
        price: 0,
        discount: 0,
        stock: 0,
        category: '',
        colors: [],
        image1: '',
        image2: '',
        image3: ''
    });
    const [sizes] = useState([
        {name: 'xsm'},
        {name: 'sm'},
        {name: 'md'},
        {name: 'lg'},
        {name: 'xl'},
        {name: '1 year'},
        {name: '2 years'},
        {name: '3 years'},
        {name: '4 years'},
        {name: '5 years'}
    ]);
    const [sizeList, setSizeList] = useState([]);
    const [preview, setPreview] = useState({
        image1: '',
        image2: '',
        image3: ''
    })
    const imageHandle = e => {
         if(e.target.files.length !== 0) {
             setState({...state, [e.target.name]: e.target.files[0]});
             const reader = new FileReader();
             reader.onloadend = () => {
                 setPreview({...preview, [e.target.name]: reader.result})
             }
             reader.readAsDataURL(e.target.files[0]);
         }
    }
    const handleInput = e => {
        setState({...state, [e.target.name]: e.target.value})
    }
    const saveColors = (color) => {
        const filtered = state.colors.filter((clr) => clr.color !== color.hex);
        setState({...state, colors: [...filtered, {color: color.hex, id: uuidv4()}]})
    }
    const deleteColor = color => {
        const filtered = state.colors.filter(clr => clr.color !== color.color);
        setState({...state, colors: filtered});
    }
    const chooseSize = sizeObject => {
        const filtered = sizeList.filter(size => size.name !== sizeObject.name);
        setSizeList([...filtered, sizeObject])
    }
    const deleteSize = name => {
        const filtered = sizeList.filter(size => size.name !== name);
        setSizeList(filtered);
    }
    console.log(preview)
    return(
        <Wrapper>
            <ScreenHeader>
            <Link to="/dashboard/products" className="btn-dark"><i className="bi bi-arrow-left-short"></i> proudcts list</Link>
            </ScreenHeader>
            <div className="flex flex-wrap -mx-3">
                <div className="w-full xl:w-8/12 p-3">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="title" className="label">title</label>
                            <input type="text" name="title" className="form-control" id="title" placeholder="title..." onChange={handleInput} value={state.title} />
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="price" className="label">price</label>
                            <input type="number" name="price" className="form-control" id="price" placeholder="price..." onChange={handleInput} value={state.price} />
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="discount" className="label">discount</label>
                            <input type="number" name="discount" className="form-control" id="discount" placeholder="discount..." onChange={handleInput} value={state.discount} />
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="stock" className="label">stock</label>
                            <input type="number" name="stock" className="form-control" id="stock" placeholder="stock..." onChange={handleInput} value={state.stock} />
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="categories" className="label">categories</label>
                            {!isFetching ? data?.categories?.length > 0 && <select name="category" id="categories" className="form-control" onChange={handleInput} value={state.category}>
                                <option value="">Choose category</option>
                                {data?.categories?.map(category => (
                                    <option value={category.name} key={category._id}>{category.name}</option>
                                ))}
                            </select> : <Spinner />}
                        </div>
                        <div className="w-full md:w-6/12 p-3">
                            <label htmlFor="colors" className="label">choose colors</label>
                            <TwitterPicker onChangeComplete={saveColors} />
                            </div>
                    
                            <div className="w-full p-3">
                            <label htmlFor="sizes" className="label">choose sizes</label>
                             {sizes.length > 0 && <div className="flex flex-wrap -mx-3">
                                 {sizes.map(size => (
                                     <div key={size.name} className='size' onClick={() => chooseSize(size)}>{size.name}</div>
                                 ))}
                                 </div>}
                            </div>
                            <div className="w-full p-3">
                                <label htmlFor="image1" className="label">
                                   Image 1
                                </label>
                                <input type="file" name="image1" id="image1" className="input-file" onChange={imageHandle} />
                            </div>

                            <div className="w-full p-3">
                                <label htmlFor="image2" className="label">
                                   Image 2
                                </label>
                                <input type="file" name="image2" id="image2" className="input-file" onChange={imageHandle} />
                            </div>

                            <div className="w-full p-3">
                                <label htmlFor="image3" className="label">
                                   Image 3
                                </label>
                                <input type="file" name="image3" id="image3" className="input-file" onChange={imageHandle} />
                            </div>
                    </div>
                </div>
                <div className="w-full xl:w-4/12 p-3">
                   <Colors colors={state.colors} deleteColor={deleteColor} />
                   <SizesList list={sizeList} deleteSize={deleteSize} />
                   <ImagesPreview url={preview.image1} heading="image 1" />
                   <ImagesPreview url={preview.image2} heading="image 2" />
                   <ImagesPreview url={preview.image3} heading="image 3" />
                </div>
            </div>
        </Wrapper>
    )
}
export default CreateProduct