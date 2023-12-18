import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Mecânica especializada',
    Svg: require('@site/static/img/car_workshop.svg').default,
    description: (
      <>
        Mecânica automóvel de uma simples troca de óleo ate uma troca de motor.
        Na nossa oficina fazemos tudo o que o seu carro necessitar.
      </>
    ),
  },
  {
    title: 'Auto detailing',
    Svg: require('@site/static/img/car_washing.svg').default,
    description: (
      <>
        Com o nosso serviço de limpeza especializada o seu carro sai da oficina a parecer novo.
        Lavagem, polimento, aspirarão, tudo o que for preciso.
      </>
    ),
  },
  {
    title: 'Prevenção é a chave da duração!',
    Svg: require('@site/static/img/multiple_services.svg').default,
    description: (
      <>
        Venha fazer uma revisão de rotina parga que tudo se mantenha em bom funcionamento.
        O segredo para manter um carro em bom estado e fazer revisões frequentemente em bom estado e fazer revisões frequentemente.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
