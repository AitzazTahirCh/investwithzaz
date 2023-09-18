import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';
import LazyShow from './LazyShow';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem, thirdItem, fourthItem, fifthItem] = product.items;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={'text-border'}
            >
              {word}{' '}
            </span>
          ))}
          {product.titlebold.split(' ').map((word, index) => (
            <span
              key={index}
              className={'text-primary'}
            >
              {word}{' '}
            </span>
          ))}
          {product.titlesimple.split(' ').map((word, index) => (
            <span
              key={index}
              className={'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <LazyShow>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600`}>{firstItem?.description}</p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img width="50%" height="50%"
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        </LazyShow>
        <LazyShow>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img width="50%" height="50%"
              className="h-6/6"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
            </div>
          </div>
        </div>
        </LazyShow>
        <LazyShow>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {thirdItem?.title}
            </h3>
            <p className={`text-gray-600`}>{thirdItem?.description}</p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img width="50%" height="50%"
              className="h-6/6"
              src={thirdItem?.img}
              alt={thirdItem?.title}
            />
          </div>
        </div>
        </LazyShow>
        <LazyShow>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img width="70%" height="70%"
              className="h-6/6"
              src={fourthItem?.img}
              alt={fourthItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {fourthItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{fourthItem?.description}</p>
            </div>
          </div>
        </div>
        </LazyShow>
        <LazyShow>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {fifthItem?.title}
            </h3>
            <p className={`text-gray-600`}>{fifthItem?.description}</p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img width="70%" height="70%"
              className="h-6/6"
              src={fifthItem?.img}
              alt={fifthItem?.title}
            />
          </div>
        </div>
        </LazyShow>
      </div>
    </section>
  );
};

export default Product;
