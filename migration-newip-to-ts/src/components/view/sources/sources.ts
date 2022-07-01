import './sources.css';
import SourcesItemInt from '../../intefaces';

/* interface SourcesItemInt {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
} */

class Sources {
    draw(data: SourcesItemInt[]) {        
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
