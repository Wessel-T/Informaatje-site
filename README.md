# Informaatje-site
This will be an indicator for the Informaatje website design and functionel uses.











<!-- eventuelen lightbox for parkeerplaats. -->

.lightbox {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    padding: 40px;
}

.lightbox-image {
    max-width: 90%;
    max-height: 90%;
    border-radius: 8px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    animation: lightboxFadeIn 0.3s ease;
}

@keyframes lightboxFadeIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.lightbox-close {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 50px;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
}

.lightbox-close:hover {
    color: #92D050;
    transform: rotate(90deg);
}

/* Zoom cursor op de afbeelding */
.parkeerplaats {
    cursor: zoom-in;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.parkeerplaats:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}