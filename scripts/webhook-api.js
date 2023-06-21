const formWrapper = document.getElementById('form-wrapper');
const form = document.getElementById('contact-form');
const popup = document.getElementById('submitted-wrapper');

async function submitHandler(e) {
    e.preventDefault();

    const discordUsername = document.getElementById('discord-username').value;
    const discordDisplayName = document.getElementById('discord-displayname').value;
    const firstName = document.getElementById('first-name').value;
    const contactReason = document.querySelector('input[name="reason"]:checked').value;
    const message = document.getElementById('message').value;

    const webhookContent = {
        embeds: [{
            title: 'WreckNoFear Contact Form',
            color: 0x00ffff,
            timestamp: new Date(),
            fields: [
                { name: '---', value: '<@387480350714232852>' },
                { name: 'Discord User', value: discordUsername },
                { name: 'Discord Display Name', value: discordDisplayName },
                { name: 'First Name', value: firstName },
                { name: 'Contact Reason', value: contactReason },
                { name: 'Message', value: message }
            ]
        }],
    };

    var webhookUrl = 'https://discord.com/api/webhooks/1002880581551521792/MHiO215eFk0fxpSKvhoJ-DHVI7-QZyxL7P35Mu9K57rdQGP8ArgpEoJ4FtpV_fsvjxkf';

    fetch(webhookUrl, {
        "method":"POST",
        "headers": {"Content-Type": "application/json"},
        "body": JSON.stringify(webhookContent),
        })
        .then(popup.style.display = "block")
        .then(formWrapper.style.display = "none")
        .then(res=> console.log(res))
        .catch(err => console.error(err));
        
}

async function resetForm() {
    popup.style.display = "none";
    formWrapper.style.display = "block";
    form.reset();
}
