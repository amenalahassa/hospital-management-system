/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

// import Medicine from '../../../models/medicine';
import User from '../../../models/user';
import connectMongo from '../../../utils/connectMongo';

export default async function add(req, res) {

    try {
        // try to connect database
        await connectMongo();

        // fetch data
        const { uid, _id, quantity, name, type, uploadOn, price, date } = req.body;
        // console.log(req.body);

        const currentAmount = quantity * price;
        // find appropiate user for the addition
        User.findOneAndUpdate(
            { uid },
            {
                $pull: {
                    stock: { _id }
                },
                $inc: {
                    totalSale: currentAmount
                },
                $push: {
                    history: {
                        $each: [{
                            name,
                            quantity: quantity,
                            total_quantity: (quantity - quantity),
                            updateon: uploadOn,
                            type
                        }], $position: 0
                    },
                    sales: {
                        $each: [{
                            name,
                            quantity,
                            remaining_quantity: 0,
                            sales_ammount: (quantity * price),
                            date
                        }], $position: 0
                    }
                },
            },
            { new: true },
            function removeConnectionsCB(err, obj) {
                if (err) {
                    console.error(err);
                } else {
                    res.send({ msg: 'Medicie Successfully Sell...' })
                }
            }
        );

        // res.send({ msg: 'Medicie Successfully Removed...' })
    } catch (error) {
        // console.log(error);
        res.send({ msg: error });
    }
}