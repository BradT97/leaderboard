import { Router, Request, Response, NextFunction } from 'express';

const router: Router = Router();

router.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${ req.path } ${ req.method } request received at ${ Date.now() }`)
    next();
});

router.route('/')
    .get((req: Request, res: Response) => {
        console.log('GET request handled by /')
        res.send('success');
    });


router.route('/createEvent')
    .post((req: Request, res:Response) => {
        console.log('Post request handled by /createEvent');
        console.log(req.body);
        res.send('success');
    });


export { router };