// Get the modal and close button elements
const modal = document.getElementById('popup-modal');
const closeBtn = document.querySelector('.close-btn');

// Workshop data for Map 1
const workshops = {
    "workshop17": {
        title: "(E4me) فريق إنرجي فور مي",
        description: "عرض تقديمي: ثقافة مصر القديمة والألعاب والرياضات التي تُعد من الأنشطة الشعبية التي يتمتع بها جميع الأعمار",
        age: "المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "15 دقيقة"
    },
    "workshop18": {
        title: "أسرة الصفوة، كلية العلوم، جامعة الإسكندرية",
        description: "عرض تقديمي: علم الفلك وكيف استخدم قدماء المصريون النجوم والكواكب لتحديد الأوقات ومواسم الزراعة",
        age: "المرحلة الابتدائية - المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "15 دقيقة"
    },
    "workshop19": {
        title: "كلية العلوم، جامعة الإسكندرية",
        description: "عرض تقديمي: الفنون عند قدماء المصريين ومن أهمها النحت والنقوش على الجدران",
        age: "المرحلة الابتدائية - المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "15 دقيقة"
    },
    "workshop20": {
        title: "الفصل الطلابي للجمعية الأمريكية للكيمياء، جامعة الإسكندرية",
        description: "عرض تقديمي: يجيب هذا العرض على سؤال كان يتساءله قدماء المصريون هل يمكن تحويل معادن الأرض مثل النحاس والفضة والرصاص الي معدن الذهب",
        age: "المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "15 دقيقة"
    },
    "workshop21": {
        title: "متحف الإسكندرية القومي",
        description: "ورشة عمل: مستحضرات التجميل والزيوت والصابون المستخدم عند قدماء المصريين والزراعة وأهميتها قديمًا",
        age: "المرحلة الابتدائية - المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "45 دقيقة"
    },
    "workshop22": {
        title: "مشروع ميكسولوجي",
        description: "عرض تقديمي: الكتابات الهيروغليفية بالإضافة إلى حجر رشيد وعرض الأعداد الرقمية",
        age: "مرحلة رياض أطفال - المرحلة الابتدائية - المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "15 دقيقة"
    },
    "workshop23": {
        title: "فريق سيڤ جونيور",
        description: "عرض تقديمي: بردية إبيزيس التي تعرض الأمراض في مصر القديمة مثل مرض القلب والعيون وأمراض الأطفال موضحة كيف أجريت العمليات الجراحية والتحاليل في هذه الفترة. بالإضافة إلى أدوات التجميل وكيف استُخدم كحل العيون كعلاج باستخدام كتاب مجسم",
        age: "المرحلة الابتدائية - المرحلة الاعدادية",
        time: "15 دقيقة"
    },
    "workshop24": {
        title: "أسرة طبيب من أجلك، كلية الطب، جامعة الإسكندرية",
        description: "عرض تقديمي: علم الجينات والوراثة والطب الشرعي عند قدماء المصريين",
        age: "المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "15 دقيقة"
    },
    "workshop25": {
        title: "أسترانوفا",
        description: "ورشة عمل: طرق العد في مصر القديمة",
        age: "المرحلة الابتدائية - المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "45 دقيقة"
    },
    "workshop26": {
        title: "أكاديمية ليتل إنجنير، دمنهور",
        description: "ورشة عمل: مراحل بناء الأهرامات باستخدام الصلصال والأكواب والعصا والأوريجامي وعرض بعض الأدوات المستخدمة في هذه الفترة",
        age: "المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "45 دقيقة"
    }
};

// Function to open the modal with specific workshop data
function openModal(workshop) {
    document.getElementById('workshop-title').textContent = workshops[workshop].title;
    document.getElementById('workshop-description').textContent = workshops[workshop].description;
    document.getElementById('workshop-age').textContent = workshops[workshop].age;
    document.getElementById('workshop-time').textContent = workshops[workshop].time;
    modal.style.display = 'block';
}

// Add event listeners to all buttons
const buttons = document.querySelectorAll('.popup-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const workshop = button.getAttribute('data-workshop');
        openModal(workshop);
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});