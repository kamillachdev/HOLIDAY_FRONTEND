import { Grid } from '@mui/material';
import '../index.css';
import { FormEvent, useState } from 'react';
import { useMutation } from 'react-query';
import api from '../utils/api';
import { AxiosError } from 'axios';
import RequestForms from '../RequestForms';

const CreateRequest = () => 
{
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [validate, setValidate] = useState<any>({});
  const [uploadForm, setUploadFile] = useState<FormData>();

  const validateDates = () => {
    let isValid = true;

    let validator = RequestForms.validator(startDate, endDate);

    if (validator !== null) {
      setValidate({
        validate: validator,
      });

      isValid = false;
    }
    return isValid;
  };

  const fetchDates = async (formUpload: FormData | undefined) => 
  {
    const res = await api({
      method: "post",
      url: "/api/Requests/createRequest",
      data: formUpload,
      headers: {
        "Content-Type": "application/json",
      }
    });
    
    if (res.status === 200)
    {
      return res.data;
    }
    throw new AxiosError(`error, status: ${res.status}`);
  };

  const handleDrop = async () =>
  {
    const formData = new FormData();
    formData.append("DateStart", startDate);
    formData.append("DateEnd", endDate);
    setUploadFile(formData);
  }




  const datesMutation = useMutation(() => fetchDates(uploadForm), {
    onSuccess: () => {
      setStartDate("");
      setEndDate("");
      alert("Pomyślnie utworzono wniosek!");
    },
    onError: (error) => {
      console.error(error);
      alert("Wystąpił błąd podczas tworzenia wniosku.");
    },
  });
  
  const requestForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const validate = validateDates();
  
    if (validate) {
      setValidate({});
      setStartDate("");
      setEndDate("")
      datesMutation.mutate();
    }
  };



    return (
    <div>
      <Grid container direction="column" justifyContent="flex-start" alignItems="stretch" style={{ flex: 1 }}>
        <Grid item xs={12}>
            <div className="header">
              <div className="inner-header flex">
                <img src="/necto-logo.png" alt="Your Logo" className="logo" />
                <h1 className="systemUrlopowy">SYSTEM URLOPOWY</h1>
              </div>
              <div>
                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                  <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                  </defs>
                  <g className="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                  </g>
                </svg>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} style={{ flex: 1 }}>
            <div id="main">
            <nav>
                <a href="/request/create">UTWÓRZ WNIOSEK</a>
                <a href="/request/show">LISTA WNIOSKÓW</a>
                <a href="/login">WYLOGUJ SIĘ</a>
                <div className="animation start-home"></div>
            </nav>
            <br />

            <div className="requestForm">
              <h3>WNIOSEK</h3>
              <form className="auth-form" method="POST" onSubmit={requestForm} autoComplete="off">
  <div className="startDate mb-3">
    <input
      type="date"
      className={`form-control ${
        validate.validate && validate.validate.startDate ? "is-invalid" : ""
      }`}
      id="startDate"
      name="startDate"
      value={startDate}
      placeholder="Data początkowa"
      onChange={(e) => setStartDate(e.target.value)}
    />

    <div
      className={`invalid-feedback text-start ${
        validate.validate && validate.validate.startDate ? "d-block" : "d-none"
      }`}
    >
      {validate.validate && validate.validate.startDate ? validate.validate.startDate[0] : ""}
    </div>
  </div>

  <div className="endDate mb-3">
    <input
      type="date"
      className={`form-control ${
        validate.validate && validate.validate.endDate ? "is-invalid" : ""
      }`}
      id="endDate"
      name="endDate"
      value={endDate}
      placeholder="Data końcowa"
      onChange={(e) => setEndDate(e.target.value)}
    />

    <div
      className={`invalid-feedback text-start ${
        validate.validate && validate.validate.endDate ? "d-block" : "d-none"
      }`}
    >
      {validate.validate && validate.validate.endDate ? validate.validate.endDate[0] : ""}
    </div>
  </div>

  <div className="text-center">
    <button onClick={handleDrop} type="submit" className="btn btn-primary w-100 theme-btn mx-auto">
      WYŚLIJ
    </button>
  </div>
</form>

            </div>

            </div>
          </Grid>
          <Grid item xs={12} style={{ flex: 1 }}>
            <footer>
              <span><b>&copy; {new Date().getFullYear()} Necto S.A.</b></span>
            </footer>
          </Grid>
      </Grid>
    </div>
    );
};
export default CreateRequest;