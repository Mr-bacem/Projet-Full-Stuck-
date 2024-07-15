const {create, getAll , getByTitle, getByCategorie,updateById,deleteById,}
= require('./product.service');

const createProduct = async (req, res) => {

    try {
        const data= req.body
        const newProduct = await create(data);
        console.log(newProduct);

        res.json(newProduct);

    } catch (error) {
        res.status(500).json({error: error.message});
    }
};






const getAllProduct = async (req, res) => {
    try {
        const allProduct = await getAll();
        res.json(allProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }};

    const  getProductByTiltle = async (req, res) => {
        try {
            const Product = await getByTitle(req.params.productTiltle);
            if (!Product) {
                return res.status(404)
                .json({ message: 'Product not found' });
            }
            res.json(Product);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }};


        const  getProductByCategorie = async (req, res) => {
            try {
                const Product = await getByCategorie(req.params.productCategorie);
                if (!Product) {
                    return res.status(404)
                    .json({ message: 'Product not found' });
                }
                res.json(Product);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }};

            const updateProductById = async (req, res) => {
                try {
                    const updatedProduct = await updateById(req.params.id, req.body);
                    if (!updatedProduct) {
                        return res.status(404).json({ message: 'Product not found' });
                    }
                    res.json(updatedProduct);
                } catch (error) {
                    res.status(500).json({ error: error.message });
                }};
            
                
            const deleteProductById = async (req, res) => {
                try {
                    const deletedProduct = await deleteById(req.params.id);
                    if (!deletedProduct) {
                        return res.status(404).json({ message: 'Product not found' });
                    }
                    res.json(deletedProduct);
                } catch (error) {
                    res.status(500).json({ error: error.message });
                }};
            


    module.exports = {createProduct, getAllProduct ,getProductByTiltle,getProductByCategorie,updateProductById,deleteProductById};