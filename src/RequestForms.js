class RequestForms {
    static validator(startDate, endDate)
    {
        let errors = RequestForms.validateDates(startDate, endDate);
        return Object.keys(errors).length > 0 ? errors : null;
    }

    static validateDates(startDate, endDate)
    {
        let errors = {};

        if (!startDate) 
        {
            errors.startDate = ["Data rozpoczęcia jest wymagana."];
        }
        else
        {
            const currentDate = new Date();
            const selectedStartDate = new Date(startDate);

            if (selectedStartDate < currentDate)
            {
                errors.startDate = ["Data rozpoczęcia nie może być wcześniejsza niż data bieżąca."];
            }
        }

        if (!endDate)
        {
            errors.endDate = ["Data zakończenia jest wymagana."];
        }
        else
        {
            const selectedEndDate = new Date(endDate);

            if(selectedEndDate < startDate)
            {
                errors.endDate = ["Data zakończenia nie może być wcześniejsza niż data rozpoczęcia."];
            }
        }
        return errors;
    }
}

export default RequestForms;