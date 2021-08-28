let skillsNodes = document.getElementsByClassName('skill');
let stacksNodes = document.getElementsByClassName('stack');

console.log('skillsNodes: ' + skillsNodes);
console.log('stacksNodes: ' + stacksNodes);

const emptyLevel = () => {
    return `<i class="far fa-circle"></i>`
}
const filledLevel = () => {
    return `<i class="fas fa-circle"></i>`
}

const fillLikert = (num, icon) => {
    let singleLevel; 
    if (icon === 'filled' && num != 0) {
        singleLevel = filledLevel();
    } else if (icon === 'empty' && num != 0) {
        singleLevel = emptyLevel();
    } else {
        return '';
    }
    const level = singleLevel.repeat(num)
    return level;
}

const rateSkill = (likert) => {
    switch(likert){
        case 'Proficient':
            likert = 4;
            break;
        case 'Advanced':
            likert = 3;
            break;
        case 'Intermediate':
            likert = 2;
            break;
        case 'Beginner':
            likert = 1;
            break;
    }
    return likert;
}

const printSkill = (num) => {
    let empty = fillLikert(4-num, 'empty');
    let filled = fillLikert(num, 'filled');
    let renderedLikert = filled.concat(empty);
    console.log('renderedLikert ' + renderedLikert)
    return renderedLikert;
}

const getSkill = (skillsNodes) => {
    for (let i = 0; i < skillsNodes.length; i++) {
        let likert = skillsNodes[i].childNodes[3].textContent;
        console.log('==== ' + skillsNodes[i].getAttribute('ID') + ' ====')
        likert = rateSkill(likert)
        skillsNodes[i].childNodes[3].style.display = 'none';
        const renderLikert = document.createElement('div');
        renderLikert.setAttribute('class', 'likert');
        const child = printSkill(likert);
        renderLikert.innerHTML = child;
        skillsNodes[i].appendChild(renderLikert);
    }
}

getSkill(skillsNodes)
getSkill(stacksNodes)